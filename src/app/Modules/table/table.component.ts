import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _dialog: MatDialog) { }

  dataSource: any = new MatTableDataSource();


  users = [
    {
      usuario: 'pnicolas',
      pais   : 'Chile',
      viajes : 5
    },
    {
      usuario: 'josemart',
      pais   : 'Peru',
      viajes : 20
    },
    {
      usuario: 'diegoaruba',
      pais   : 'Colombia',
      viajes : 14
    }
  ]
  displayColumns = ['usuario', 'pais', 'viajes', 'accion']

  ngOnInit() {
    this.dataSource.data = this.users;
    this.dataSource.sort = this.sort;
  }

  deleteUser(element){
    let dialogRef = this._dialog.open(ConfirmModalComponent, {
      data: {
        usuario: element.usuario
      }
    })

    dialogRef.componentInstance.emitDelete.subscribe(result => {
      dialogRef.close()
      console.log(this.dataSource.data)
      this.dataSource.data = this.dataSource.data.filter(el => el.usuario != element.usuario);
    })
  }

}
