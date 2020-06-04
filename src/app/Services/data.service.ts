import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { CanvasNode } from './../Models/CanvasNode';
import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public nodes: CanvasNode[];

  public dataChanged$: Observable<CanvasNode[]>;

  private _dataExchange: BehaviorSubject<CanvasNode[]>;

  constructor() {
    this._dataExchange = new BehaviorSubject<CanvasNode[]>([]);
    this.dataChanged$ = this._dataExchange.asObservable();


    const storedNodes = localStorage.getItem('Plan');

   const nodes =  storedNodes ? JSON.parse(storedNodes) as CanvasNode[] : [];

    this._dataExchange.next(nodes)
  }

  // gets csv file and parses the data to a CanvasNode[]
  public createNodesFromFile(csvFile: Blob): void {
    Papa.parse(csvFile, {
      complete: (x: {data: string[][]}) => {
        if (x) {
          console.log(x);
          this._dataExchange.next(this._mapCSVDataToNodes(x.data));
          console.log(this._mapCSVDataToNodes(x.data));
        }
        
      },
    });
  }

  public exportNodes(): void {
    const parseConfig = {columns: ['Id', 'Name', 'Duration', 'Predecessors', 'Successors']};

    console.log(this._dataExchange.value);

    const csvData = Papa.unparse(this._dataExchange.value, parseConfig);

   this._downloadCSV(csvData);
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
        if (key === 'Duration') {
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

  private _downloadCSV(csv: string): void {
    const downloadLink = document.createElement('a');
    const blob = new Blob(['\ufeff', csv]);
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = 'data.csv';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
