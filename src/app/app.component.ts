import { DataService } from './Services/data.service';
import { CanvasNodeComponent } from './Components/canvas-node/canvas-node.component';
import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { CanvasNode } from './Models/CanvasNode';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { PlanDialogComponent } from './Components/plan-dialog/plan-dialog.component';
import { ProjectPlan } from './Models/ProjectPlan';
import { v1 as uuidv1 } from 'uuid';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nodes: CanvasNode[];

  public plans: ProjectPlan[]

  @ViewChild('drawer') drawer: MatDrawer; 

  // Inject the dataservice and the dialog service with dependency injection
  constructor(private dataService: DataService, private matDialog: MatDialog) {

    this.plans = [];

    this.dataService.planSelected$.subscribe((nodes: CanvasNode[]) => {
      console.log(nodes);
      this.nodes = nodes
    });
  }

  public createNewPlan(): void {
    const dialogRef = this.matDialog.open(PlanDialogComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name) {

        const newPlan: ProjectPlan = {
          Id: uuidv1().toString(),
          Name: name,
          Nodes: []
        };

        this.plans.push(newPlan);
      }
    });
  }


  public saveNodes(): void {
    localStorage.setItem('Plan' , JSON.stringify(this.nodes));
  }

  public openDrawer(): void {
    console.log(this.drawer);
    this.drawer.open();
  }

  public closeDrawer(): void {
    this.drawer.close();
  }
}
