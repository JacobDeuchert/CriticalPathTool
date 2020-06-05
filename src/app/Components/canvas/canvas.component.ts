import { CanvasNode } from './../../Models/CanvasNode';
import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  OnChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  HostListener,
} from '@angular/core';
import { CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { v1 as uuidv1 } from 'uuid';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnChanges {
  @Input() nodes: CanvasNode[];

  public displayNodes: boolean;

  // Gets the svg element
  @ViewChild('svg', { static: true }) svg: ElementRef<HTMLElement>;

  // Gets the container of the nodes and the svg element
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLElement>;

  // Injecting the angular renderer service
  constructor(private renderer: Renderer2) {
    this.displayNodes = false;
  }

  // listen for window resize and calculate the new cavas size
  @HostListener('window:resize') resize() {
    this._setCanvasSize(this.nodes);
  }

  // Angular LifecycleHook:  gets called everytime the nodes input changes
  public ngOnChanges(): void {
    this._clearSvg();
    this.displayNodes = false;

    if (this.nodes && this.nodes.length > 0) {
      // when there is any node without a position we reposition the whole tree

      if (this.nodes.find((node: CanvasNode) => !node.X || !node.Y)) {
        this._calculateNodePositions(this.nodes);
      }

      this.calculateBuffer(true);

      if (this.canvas) {
        this._setCanvasSize(this.nodes);
      }
    }
    this.displayNodes = true;
  }


  public dragNode(node: CanvasNode, dragEvent: CdkDragStart): void {
    const draggedElement = dragEvent.source.element.nativeElement;

    // handle scroll when draggin
    this._scrollOnDrag(draggedElement, node);

    const canvasElement = this.canvas.nativeElement;

    // gets position relative to viewport
    const nodePositionInViewport = draggedElement.getBoundingClientRect();

    // we need to consider the scroll because the position is relative to the viewport and not the scroll
    const leftScroll = canvasElement.parentElement.scrollLeft;
    const topScroll = canvasElement.parentElement.scrollTop;

    // substract the header height to get the position relative to the parent
    node.Y = nodePositionInViewport.y - 64 + topScroll;
    node.X = nodePositionInViewport.x + leftScroll;

    // change all lines the dragged node is connected to
    node.Predecessors.forEach((id) => {
      const predeccessor = this._getNodeById(id);

      this._changeLineBetweenNodes(predeccessor, node);
    });

    node.Successors.forEach((id) => {
      const successor = this._getNodeById(id);

      this._changeLineBetweenNodes(node, successor);
    });
  }

  public connectNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    fromNode.Successors.push(toNode.Id);
    toNode.Predecessors.push(fromNode.Id);

    this._createLineBetweenNodes(fromNode, toNode);

    this.calculateBuffer();
  }

  public disconnectNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    const fromIndex = toNode.Predecessors.indexOf(fromNode.Id);
    toNode.Predecessors.splice(fromIndex, 1);

    const toIndex = fromNode.Successors.indexOf(toNode.Id);
    fromNode.Successors.splice(toIndex, 1);

    this._destroyLineBeweenNodes(fromNode, toNode);

    this.calculateBuffer();
  }

  public addNode(): void {
    console.log('AddingNode');
    const newNode: CanvasNode = {
      Id: uuidv1().toString(),
      Name: null,
      Critical: false,
      Predecessors: [],
      Successors: [],
      X: 0,
      Y: 0,
      Duration: null,
      earliestStart: null,
      earliestEnd: null,
      latestEnd: null,
      latestStart: null,
      freeBuffer: null,
      totalBuffer: null
    }

    this.nodes.push(newNode);

    console.log(this.nodes);
  }


  public deleteNode(node: CanvasNode): void {
    const nodeIndex = this.nodes.indexOf(node);

    node.Predecessors.forEach((id) => {
      const predeccessor = this._getNodeById(id);

      const indexInPredeccessor = predeccessor.Successors.indexOf(node.Id);

      predeccessor.Successors.splice(indexInPredeccessor, 1);

      this._destroyLineBeweenNodes(predeccessor, node);
    });

    node.Successors.forEach((id) => {
      const successor = this._getNodeById(id);

      const indexInSuccessor = successor.Predecessors.indexOf(node.Id);

      successor.Predecessors.splice(indexInSuccessor, 1);

      this._destroyLineBeweenNodes(node, successor);
    });

    this.nodes.splice(nodeIndex, 1);
  }

  public calculateBuffer(init?: boolean): void {
    const endNodes = this.nodes.filter((x) => x.Successors.length === 0);
    const startNodes = this.nodes.filter((x) => x.Predecessors.length === 0);

    endNodes.forEach((node) => {
      this._calculateEarliest(node);
    });

    startNodes.forEach((node) => {
      this._calculateLatest(node);
    });

    startNodes.forEach((node) => {
      this._calculateBuffer(node);
    });

    this._setupLines(this.nodes, init);

  }

  public getAvailableNodes(node: CanvasNode): CanvasNode[] {
    const nodesInPath = this._getNodesInPath(node);
    return this.nodes.filter((x) => !nodesInPath.includes(x));
  }

  private _setupLines(nodes: CanvasNode[], init?: boolean): void {
    nodes.forEach((node) => {
      node.Successors.forEach((id) => {
        const successor = this._getNodeById(id);

        if (init) {
          this._createLineBetweenNodes(node, successor);
        } else {
          this._changeLineBetweenNodes(node, successor);
        }
      });
    });
  }

  private _getNodesInPath(node: CanvasNode): CanvasNode[] {
    let nodesInPath: CanvasNode[] = [node];
    node.Predecessors.forEach((predeccessorId) => {
      const predeccessor = this._getNodeById(predeccessorId);
      nodesInPath = nodesInPath.concat(this._getNodesInPath(predeccessor));
    });

    return nodesInPath;
  }

  private _clearSvg(): void {

    const nodes = [];

    this.svg.nativeElement.childNodes.forEach(x => nodes.push(x));
    nodes.forEach(x => x.remove());
  }

  // Gets the longest path to the start
  private _getNodePathLength(node: CanvasNode): number {
    let pathLength = 0;

    node.Predecessors.forEach((id) => {
      const predecessor = this._getNodeById(id);
      const predecessorPathLength = this._getNodePathLength(predecessor);

      if (predecessorPathLength > pathLength) {
        pathLength = predecessorPathLength;
      }
    });

    if (node.Predecessors.length > 0) {
      return pathLength + 1;
    } else {
      return pathLength;
    }
  }

  private _destroyLineBeweenNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    const lineId = `${fromNode.Id}_${toNode.Id}`;
    const line = document.getElementById(lineId);

    if (line) {
      line.remove();
    }
  }

  private _createLineBetweenNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    const lineId = `${fromNode.Id}_${toNode.Id}`;
    const color =
      fromNode.Critical && toNode.Critical ? 'red' : 'rgba(0 ,0 ,0 ,0.5)';
    this._drawLine(lineId, fromNode.X ?? 0, fromNode.Y ?? 0,toNode.X ?? 0,toNode.Y ?? 0, color, true);
  }

  private _changeLineBetweenNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    const lineId = `${fromNode.Id}_${toNode.Id}`;
    const color =
      fromNode.Critical && toNode.Critical ? 'red' : 'rgba(0 ,0 ,0 ,0.5)';
    this._drawLine(lineId, fromNode.X, fromNode.Y, toNode.X, toNode.Y, color, false);
  }

  private _drawLine(id: string, x1: number,y1: number,x2: number,y2: number,color: string,newLine?: boolean): void {
    let line: SVGLineElement;

    if (newLine) {
      line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    } else {
      line = document.getElementById(id) as any;
    }

    line.setAttribute('id', id);
    line.style.strokeWidth = '2px';
    line.style.stroke = color;

    line.setAttribute('x1', (x1 + 200).toString());
    line.setAttribute('y1', (y1 + 42).toString());

    line.setAttribute('x2', x2.toString());
    line.setAttribute('y2', (y2 + 42).toString());

    this.svg.nativeElement.appendChild(line);
  }

  private _getNodeById(id: string): CanvasNode {
    return this.nodes.find((x) => x.Id === id);
  }

  private _calculateEarliest(node: CanvasNode): number {
    const highestPredecEE =
      node.Predecessors.map((predecessor) =>
        this._calculateEarliest(this._getNodeById(predecessor))
      ).sort((a, b) => b - a)[0] ?? 0;

    node.earliestStart = highestPredecEE;
    node.earliestEnd = highestPredecEE + node.Duration;

    return node.earliestEnd;
  }

  private _calculateLatest(node: CanvasNode): number {
    const lowestSucLS =
      node.Successors.map((predecessor) =>
        this._calculateLatest(this._getNodeById(predecessor))
      ).sort((a, b) => a - b)[0] ?? node.earliestEnd;

    node.latestEnd = lowestSucLS;
    node.latestStart = lowestSucLS + -node.Duration;
    return node.latestStart;
  }

  private _calculateBuffer(node: CanvasNode): void {
    const lowestSucES =
      node.Successors.map((succesors) => {
        const successorNode = this._getNodeById(succesors);
        this._calculateBuffer(successorNode);
        return successorNode.earliestStart;
      }).sort((a, b) => a - b)[0] ?? node.earliestEnd;

    node.totalBuffer = node.latestEnd - node.earliestEnd;

    node.freeBuffer = lowestSucES - node.earliestEnd;

    node.Critical = node.totalBuffer === 0 && node.freeBuffer === 0;
  }

  private _setCanvasSize(nodes: CanvasNode[]): void {
    const canvasElement = this.canvas.nativeElement;

    const parentSize = canvasElement.parentElement.getBoundingClientRect();

    console.log(parentSize);

    let maxNodesXPosition = 0;
    let maxNodesYPosition = 0;

    nodes.forEach((node) => {
      if (node.X > maxNodesXPosition) {
        maxNodesXPosition = node.X;
      }

      if (node.Y > maxNodesYPosition) {
        maxNodesYPosition = node.Y;
      }
    });

    // the width is calculated by the nodes max x value, the width of a node and a 50px margin
    const width = maxNodesXPosition + 200 + 50;
    // the height is calculated by the nodes max y value, the height of a node and a 80px margin
    const height = maxNodesYPosition + 50 + 80;

    console.log(width);
    // assign the width only if is bigger than the current canvas size
    if (width > parentSize.width) {
      this.renderer.setStyle(canvasElement, 'width', width + 'px');
    } else {
      this.renderer.setStyle(canvasElement, 'width', '100%');
    }

    // assign the width only if is bigger than the current canvas size
    if (height > parentSize.height) {
      this.renderer.setStyle(canvasElement, 'height', height + 'px');
    } else {
      this.renderer.setStyle(canvasElement, 'height', '100%');
    }
  }

  private _scrollOnDrag(draggedElement: HTMLElement, node: CanvasNode): void {
    const canvasElement = this.canvas.nativeElement;
    const scrollContainer = this.canvas.nativeElement.parentElement;

    const currentScrollX = scrollContainer.scrollLeft;
    const currentScrollY = scrollContainer.scrollTop;

    // PivP stands for Position in Viewport
    const draggedPiVP = draggedElement.getBoundingClientRect();
    const canvasPiVP = canvasElement.getBoundingClientRect();
    const containerPiVP = scrollContainer.getBoundingClientRect();

    const viewportWidth = containerPiVP.width;
    const viewportHeight = containerPiVP.height;

    // top right corner point of the dragged element
    const topRightPoint = draggedPiVP.x + draggedPiVP.width;

    // horizontal scrolling
    if (topRightPoint >= viewportWidth - 30) {
      if (viewportWidth >= canvasPiVP.width - currentScrollX) {
        canvasElement.style.width = canvasPiVP.width + 10 + 'px';
      }
      scrollContainer.scroll({
        left: currentScrollX + 10,
        top: currentScrollY,
      });
    }

    if (draggedPiVP.x <= 30) {
      if (currentScrollX) {
        scrollContainer.scroll({
          left: currentScrollX - 10,
          top: currentScrollY,
        });
      }
    }

    // bottom left corner of the dragged element
    const bottomLeftPoint = draggedPiVP.y + draggedPiVP.height;

    // verticalScrolling
    if (bottomLeftPoint >= viewportHeight - 30) {
      if (viewportHeight >= canvasPiVP.height - currentScrollY) {
        canvasElement.style.height = canvasPiVP.height + 10 + 'px';
      }
      scrollContainer.scroll({
        left: currentScrollX,
        top: currentScrollY + 10,
      });
    }

    if (draggedPiVP.y <= 30 + 64) {
      if (currentScrollY) {
        scrollContainer.scroll({
          left: currentScrollX,
          top: currentScrollY - 10,
        });
      }
    }
  }

  private _calculateNodePositions(nodes: CanvasNode[]): void {
    const startNodes = nodes.filter((x) => x.Predecessors.length === 0);

    startNodes.forEach((startNode, index) => {
      startNode.Y = 50 + index * 150;
      this._positionNode(startNode);
    });
  }

  private _positionNode(node: CanvasNode): void {
    const pathLength = this._getNodePathLength(node);
    node.X = 50 + pathLength * 280;

    if (node.Predecessors.length > 0) {
      const lowestPredec: CanvasNode = node.Predecessors.map((predecessor) =>
        this._getNodeById(predecessor)
      ).sort((a, b) => a.Y - b.Y)[0];
      node.Y = lowestPredec.Y + 150 * lowestPredec.Successors.indexOf(node.Id);
    }

    node.Successors.forEach((id) => {
      const successor = this._getNodeById(id);
      this._positionNode(successor);
    });
  }

  private _calculate
}
