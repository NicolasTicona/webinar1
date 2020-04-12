import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  showUsers: number;

  UNKOWNUSER = '../../../assets/user.png';
  users = [
    {
      active: true,
      usuario: 'pnicolas',
      pais   : 'Chile',
      viajes : 5
    },
    {
      active: true,
      usuario: 'josemart',
      pais   : 'Peru',
      viajes : 20
    },
    {
      active: true,
      usuario: 'diegoaruba',
      pais   : 'Colombia',
      viajes : 14
    }
  ]
  constructor() { }

  ngOnInit() {
    this.showUsers = this.users.length;
  }


  setVisibleUser(user, event){
    console.log(this.users)
    this.users
      .map(us => {
        if(us.usuario == user.usuario){
          us.active = event.checked
        }
      })

    this.showUsers = this.users.filter(user => user.active).length;
    console.log(this.showUsers)
  }

}
