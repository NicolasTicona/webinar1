import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  navLinks = [
    {
      path: 'login',
      label: 'Login'
    },
    {
      path: 'table',
      label: 'Table',
    },
    {
      path: 'grid',
      label: 'Grid'
    }
  ]

}
