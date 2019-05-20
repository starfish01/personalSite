import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OverviewComponent } from './overview/overview.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OverviewComponent, EditItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }