import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';


@NgModule({
  declarations: [OverviewComponent, EditItemComponent, GlobalSettingsComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    
  ]
})
export class AdminModule { }