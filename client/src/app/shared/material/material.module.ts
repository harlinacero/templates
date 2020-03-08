import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule,
  MatTabsModule, MatDialogModule, MatSelectModule, MatCardModule, MatSortModule, MatDatepickerModule,
  MatNativeDateModule, MatButtonModule, MatProgressBarModule, MatToolbarModule
} from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule

  ], exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
