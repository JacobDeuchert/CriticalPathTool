import { CanvasNode } from './../../Models/CanvasNode';
import { Component, OnInit, Input, ViewChildren, QueryList, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnChanges {


  @Input() nodes: CanvasNode[];



  

  // Gets the svg element
   @ViewChild('svg', {static: true}) svg: ElementRef<SVGElement>



  constructor() {

 }

  // gets called everytime the nodes input changes
  public ngOnChanges(): void {
    if (this.nodes && this.nodes.length > 0) {
      this._setupLines(this.nodes);
    }
  }


  public startDraggingNode(node: CanvasNode, dragEvent: CdkDragStart): void {
    console.log(node);
    
    node.Predeccessors.forEach(id => {
      const predeccessor = this._getNodeById(id);

      this._destroyLineBeweenNodes(predeccessor , node);
    });

    node.Successors.forEach(id => {
      const successor = this._getNodeById(id);

      this._destroyLineBeweenNodes(node , successor);
    });
  }

  public endDraggingNode(node: CanvasNode , dragEvent: CdkDragEnd): void {

    const draggedElement = dragEvent.source.element.nativeElement;

    // gets position relative to viewport
    const positionRectToViewport = draggedElement.getBoundingClientRect();
  
    // substract the header height to get the position relative to the parent
    node.X = positionRectToViewport.x;
    node.Y = positionRectToViewport.y - 64;

    node.Predeccessors.forEach(id => {
      const predeccessor = this._getNodeById(id);

      this._createLineBetweenNodes(predeccessor , node);
    });

    node.Successors.forEach(id => {
      const successor = this._getNodeById(id);

      this._createLineBetweenNodes(node , successor);
    });

  }

  private _setupLines(nodes: CanvasNode[]): void {
    nodes.forEach(node => {

      node.Successors.forEach(id => {
        const successor = this._getNodeById(id);
        this._createLineBetweenNodes(node, successor);
      });

    });
  }

  public getAvailableNodes(node: CanvasNode): CanvasNode[] {
    const nodesInPath = this._getNodesInPath(node);
    return this.nodes.filter( x => !nodesInPath.includes(x) && !node.Successors.includes(x.Id));
  }


  private _getNodesInPath(node: CanvasNode): CanvasNode[] {
    let nodesInPath: CanvasNode[] = [node];
    node.Predeccessors.forEach(predeccessorId => {
      const predeccessor = this._getNodeById(predeccessorId);
     nodesInPath = nodesInPath.concat(this._getNodesInPath(predeccessor));
    });

    return nodesInPath;
  }



  private _destroyLineBeweenNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    const lineId = `${fromNode.Id}_${toNode.Id}`;
    const line = document.getElementById(lineId);

    console.log(line);

    if (line) {
      line.remove();
    }


  }

  private _createLineBetweenNodes(fromNode: CanvasNode, toNode: CanvasNode): void {
    const lineId = `${fromNode.Id}_${toNode.Id}`;
    const color = fromNode.Critical && toNode.Critical ? 'red' : 'rgba(0 ,0 ,0 ,0.5)';
    this._createLine(lineId , fromNode.X, fromNode.Y , toNode.X, toNode.Y, color);
  }

  private _createLine(id: string, x1: number , y1: number, x2: number, y2: number, color: string): void {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    line.setAttribute('id' , id);
    line.style.strokeWidth = '2px';
    line.style.stroke = color;

    line.setAttribute('x1', (x1 + 200).toString());
    line.setAttribute('y1', (y1 + 40).toString());

    line.setAttribute('x2', x2.toString());
    line.setAttribute('y2', (y2 + 40).toString());

    this.svg.nativeElement.appendChild(line);
  }

  private _getNodeById(id: string): CanvasNode {
    return this.nodes.find(x => x.Id === id);
  }


  
}
