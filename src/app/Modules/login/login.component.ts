import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  showProgress: boolean = false;
  _counter: number = 0;

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onChangeName(element){
    this._counter = element.value.length
  }


  registerUser(){

    this.showProgress = true;
    setTimeout(() => {
      this._snackbar.open('Se registro!', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'left'
      })
      
      this.showProgress = false;
    }, 3000)
  }

  onChangeCheckbox(event){
    console.log(event)
  }

  onChangeSlider(event){
    console.log(event)
  }

  formatLabel(number: number){
    return `${number}!`
  }

}
