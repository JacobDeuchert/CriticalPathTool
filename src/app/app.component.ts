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

  public selectedPlanId: string;
  public selectedPlanName: string;

  public plans: ProjectPlan[]

  // Gets the drawer component
  @ViewChild('drawer') drawer: MatDrawer; 

  // Inject the dataservice and the dialog service with dependency injection
  constructor(private dataService: DataService, private matDialog: MatDialog) {

    this.plans = this.dataService.plans;

    // listen to the plan selection
    this.dataService.planSelected$.subscribe((plan: ProjectPlan) => {
      this.nodes = plan.Nodes
      this.selectedPlanId = plan.Id;
      this.selectedPlanName = plan.Name;
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

  public deletePlan(plan: ProjectPlan): void {
    this.dataService.deletePlan(plan.Id);
  }

  public selectPlan(plan: ProjectPlan): void {
    this.dataService.selectPlan(plan);
    this.closeDrawer()
  }


  public save(): void {
    this.dataService.saveAll();
  }


  public openDrawer(): void {
    this.drawer.open();
  }

  public closeDrawer(): void {
    this.drawer.close();
  }
}
