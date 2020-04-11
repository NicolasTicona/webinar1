import { AppComponent } from './../app.component';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'table', component: TableComponent},
  {path: 'grid', component: GridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ModulesRouting { }
