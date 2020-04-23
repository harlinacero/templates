import { Component, OnInit, Input } from '@angular/core';
import { ErrorType } from '../../enums/errortype.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() type: number;
  color: string;

  constructor() { }

  ngOnInit() {

  }

  showMessage(type, message) {
    this.message = message;
    switch (this.type) {
      case ErrorType.Error:
        return "#f44336";
      case ErrorType.Success:
        return "#4CAF50";
      case ErrorType.Warning:
        return "##ff9800";
    }
  }

}

