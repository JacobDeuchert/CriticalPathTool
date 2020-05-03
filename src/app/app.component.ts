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
  const node1Id = uuidv1();
  const node2Id = uuidv1();
  const node3Id = uuidv1();
  const node4Id = uuidv1();

    this.nodes = [
      {
        Id: node1Id,
        Name: 'Test',
        Critical: false,
        Predeccessors: [],
        Successors: [node2Id, node3Id, node4Id],
        X: 50,
        Y: 120
      },
      {
        Id: node2Id,
        Name: 'Test1',
        Critical: false,
        Predeccessors: [node1Id],
        Successors: [node4Id],
        X: 320,
        Y: 80
      },
      {
        Id: node3Id,
        Name: 'Test2',
        Critical: false,
        Predeccessors: [node1Id],
        Successors: [node4Id],
        X: 500,
        Y: 450
      },
      {
        Id: node4Id,
        Name: 'Test3',
        Critical: false,
        Predeccessors: [node3Id, node2Id, node1Id],
        Successors: [],
        X: 220,
        Y: 700
      }
    ]
    
  }

  public addNode(): void {
    const newNode: CanvasNode = {
      Id: uuidv1(),
      Name: null,
      Critical: false,
      Predeccessors: [],
      Successors: [],
      X: 0,
      Y: 0
    }

    this.nodes.push(newNode);
  }
}
