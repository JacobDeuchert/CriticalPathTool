import { CanvasNodeComponent } from './Components/canvas-node/canvas-node.component';
import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { CanvasNode } from './Models/CanvasNode';
import { v1 as uuidv1 } from 'uuid';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public nodes: CanvasNode[];

  constructor() {
    this.nodes = [];
  }

  public addNode(): void {
    const newNode: CanvasNode = {
      Id: uuidv1(),
      Name: null,
      Critical: false,
      Predeccessors: [],
      Successors: [],
      X: 0,
      Y: 0,
      Duration: null,
      earliestStart: null,
      earliestEnd: null,
      latestEnd: null,
      latestStart: null
    }

    this.nodes.push(newNode);
  }
}
