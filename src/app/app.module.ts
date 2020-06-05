import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatMenuModule} from '@angular/material/menu'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';  
import { AppComponent } from './app.component';
import { CanvasComponent } from './Components/canvas/canvas.component';
import { CanvasNodeComponent } from './Components/canvas-node/canvas-node.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { PlanDialogComponent } from './Components/plan-dialog/plan-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasNodeComponent,
    HeaderComponent,
    PlanDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],          
  bootstrap: [AppComponent]
})
export class AppModule { }
