import { Component, OnInit } from '@angular/core';
import { AprovalMatrixService } from './aproval-matrix.service';

@Component({
  selector: 'app-aproval-matrix',
  templateUrl: './aproval-matrix.component.html',
  styleUrls: ['./aproval-matrix.component.scss']
})
export class AprovalMatrixComponent implements OnInit {

  constructor(private aprovalMatrix: AprovalMatrixService) {
    this.getAllAprovalMatrix();
  }

  ngOnInit() {
  }

  getAllAprovalMatrix() {
    this.aprovalMatrix.GetAllAprovalMatrix().subscribe(res => {
      console.log(res);
    });
  }

}
