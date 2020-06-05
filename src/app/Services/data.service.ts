import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { CanvasNode } from './../Models/CanvasNode';
import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
import { ProjectPlan } from '../Models/ProjectPlan';
import { v1 as uuidv1 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class DataService {
 
  public plans: ProjectPlan[];

  public planSelected$: Observable<ProjectPlan>;

  private _selectedPlan: BehaviorSubject<ProjectPlan>;

  constructor() {


    // Get Data out of local storage or assign a default plan if there is no saved data
    const localData = localStorage.getItem('Data');

    this.plans = localData ? JSON.parse(localData) : [
      {
        Id: uuidv1().toString(),
        Name: 'Netzplan 1',
        Nodes: []
      }
    ];


    this._selectedPlan = new BehaviorSubject<ProjectPlan>(this.plans[0]);

    this.planSelected$ = this._selectedPlan.asObservable();



  }

  public selectPlan(plan: ProjectPlan): void {
    if (this.plans.find(x => x.Id === plan.Id))
    this._selectedPlan.next(plan);
  }

  public saveAll(): void {
    const stringedData = JSON.stringify(this.plans);
    localStorage.setItem('Data', stringedData);
  }

  public addPlan(name: string): void {

    const newPlan: ProjectPlan = {
      Id: uuidv1().toString(),
      Name: name,
      Nodes: []
    };

    this.plans.push(newPlan);
  }

  public deletePlan(id: string): void {

    const planIndex = this.plans.findIndex(x => x.Id === id);

    this.plans.splice(planIndex, 1);
  }



  // gets csv file and parses the data to a CanvasNode[]
  public createNodesFromFile(csvFile: Blob): void {
    Papa.parse(csvFile, {
      complete: (x: {data: string[][]}) => {
        if (x) {
          const selectedPlan = this._selectedPlan.value;

          selectedPlan.Nodes = this._mapCSVDataToNodes(x.data);
          this._selectedPlan.next(selectedPlan);
        }
        
      },
    });
  }

  public exportNodes(): void {
    const parseConfig = {columns: ['Id', 'Name', 'Duration', 'Predecessors', 'Successors', 'X' , 'Y']};

    const nodes = this._selectedPlan.value.Nodes;

    const csvData = Papa.unparse(nodes, parseConfig);

   this._downloadCSV(csvData, this._selectedPlan.value.Name);
  }

  private _mapCSVDataToNodes(data: string[][]): CanvasNode[] {
    
    const nodeData: CanvasNode[] = [];

    const keys = data[0] as string[];

    // remove the header row
    data.splice(0, 1);

    data.forEach((objArr: any[]) => {
      const obj: CanvasNode = new CanvasNode();

      keys.forEach((key, index: number) => {
        // typings
        if (key === 'Duration' || key === 'X' || key === 'Y') {
          obj[key] = Number(objArr[index]);
        } else if (key === 'Successors' || key === 'Predecessors') {
          console.log(objArr[index] === '-');
          if (objArr[index] === '-' || !objArr[index]) {
            console.log(22);
            obj[key] = [];
          } else {
            console.log(23);
            obj[key] = objArr[index]?.split(',') ?? [];
          }
        } else {
          obj[key] = objArr[index];
        }
      });

      nodeData.push(obj);
    });
    return nodeData;
  }

  private _downloadCSV(csv: string, name: string): void {
    const downloadLink = document.createElement('a');
    const blob = new Blob(['\ufeff', csv]);
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = name + '.csv';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
