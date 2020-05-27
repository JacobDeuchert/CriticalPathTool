import { CanvasComponent } from './../canvas/canvas.component';
import { CanvasNode } from './../../Models/CanvasNode';
import { Component, Input, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-canvas-node',
  templateUrl: './canvas-node.component.html',
  styleUrls: ['./canvas-node.component.scss']
})
export class CanvasNodeComponent implements AfterViewInit {

  @Input() node: CanvasNode;

  @Output() delete: EventEmitter<CanvasNode>;

  @Output() durationChanged: EventEmitter<CanvasNode>;

  public availableNodes: CanvasNode[];

  private _durationChanged$: Subject<void>;

  constructor(public elementRef: ElementRef<HTMLElement> , private canvasComponent: CanvasComponent) {
    this.delete = new EventEmitter();
    this.availableNodes = [];

    this.durationChanged = new EventEmitter();

    this._durationChanged$ = new Subject();

    this._durationChanged$.pipe(debounceTime(250)).subscribe( () => {
      this.durationChanged.emit();
    });
  }

 public ngAfterViewInit(): void {
   if (this.node) {
     this.positionNode(this.node.X, this.node.Y);
   }
 }

 public getAvailableNodes(): void {
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

 public inputDuration(): void {
   this._durationChanged$.next();
 }

 public positionNode(x: number , y: number): void {
  this.elementRef.nativeElement.parentElement.style.transform = `translate3d(${this.node.X}px , ${this.node.Y}px , 0)`
 }



}
