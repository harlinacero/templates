import { Component, OnInit, Input } from '@angular/core';
import { Datasource } from '../../interfaces/datasource';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() datasource: Datasource;
  listData: any[] = [];

  constructor() {
    const table = document.getElementById('table');

    this.datasource = {
      fields: [
        { code: 'name', name: 'Nombre' },
        { code: 'lastName', name: 'Apellido' },
        { code: 'age', name: 'Edad' }
      ],
      data: [
        { name: 'juan1', lastName: 'aas1', age: '1' },
        { name: 'juan2', lastName: 'aas2', age: '2' },
        { name: 'juan3', lastName: 'aas3', age: '3' },
        { name: 'juan4', lastName: 'aas4', age: '4' }
      ]
    };


    for (const key of this.datasource.data) {
      let cells = '';
      for (const cell of Object.values(key)) {
        cells += '<td>' + cell + '</td>';
      }
      this.listData.push('<tr>' + cells + '</tr>');
    }

    console.log(this.listData);
  }

  ngOnInit() {
  }

}

