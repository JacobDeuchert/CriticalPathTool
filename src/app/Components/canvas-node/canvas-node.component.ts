import { CanvasComponent } from './../canvas/canvas.component';
import { CanvasNode } from './../../Models/CanvasNode';
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, AfterViewInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-canvas-node',
  templateUrl: './canvas-node.component.html',
  styleUrls: ['./canvas-node.component.scss']
})
export class CanvasNodeComponent implements AfterViewInit {

  @Input() node: CanvasNode;

  @Output() delete: EventEmitter<CanvasNode>;

  public availableNodes: CanvasNode[];

  constructor(public elementRef: ElementRef<HTMLElement> , private canvasComponent: CanvasComponent) { 
    this.delete = new EventEmitter();
    this.availableNodes = [];
  }

 public ngAfterViewInit(): void {
   if (this.node) {
     console.log(this.elementRef.nativeElement);
     this.elementRef.nativeElement.parentElement.style.transform = `translate3d(${this.node.X}px , ${this.node.Y}px , 0)`
   }
 }

 public getAvailableNodes(): void {
   console.log("calling");
   this.availableNodes =  this.canvasComponent.getAvailableNodes(this.node)
 }

 public connectoToNode(connectToNode: CanvasNode): void {
   this.canvasComponent.connectNodes(this.node, connectToNode);
 }

 public openNodeSelec(select: MatSelect): void {
   this.getAvailableNodes();

   setTimeout( () => {
     select.open();
   });
 }

 public changeConnectionSelection(event: MatSelectChange): void {
   const selectedNodes = event.value as string[];


   // Connect all new connections
   selectedNodes.forEach( id => {
     if (!this.node.Successors.includes(id)) {
       const connectedNode = this.availableNodes.find(x => x.Id === id);
       this.canvasComponent.connectNodes(this.node, connectedNode);
     }
   });

   // disconnect all connections not in the current selection but in successors

   this.node.Successors.forEach( id => {
     if (!selectedNodes.includes(id)) {
      const disconnectedNode = this.availableNodes.find(x => x.Id === id);
      this.canvasComponent.disconnectNodes(this.node, disconnectedNode);
     }

   });
 }

  

}
