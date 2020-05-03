import { CanvasComponent } from './../canvas/canvas.component';
import { CanvasNode } from './../../Models/CanvasNode';
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-node',
  templateUrl: './canvas-node.component.html',
  styleUrls: ['./canvas-node.component.scss']
})
export class CanvasNodeComponent implements AfterViewInit {

  @Input() node: CanvasNode;

  @Output() componentInit: EventEmitter<HTMLElement>;

  constructor(public elementRef: ElementRef<HTMLElement> , private canvasComponent: CanvasComponent) { }

 public ngAfterViewInit(): void {
   if (this.node) {
     console.log(this.elementRef.nativeElement);
     this.elementRef.nativeElement.parentElement.style.transform = `translate3d(${this.node.X}px , ${this.node.Y}px , 0)`
   }
 }

 public getAvailableNodes(): void {
   console.log(this.canvasComponent.getAvailableNodes(this.node));
 }

  

}
