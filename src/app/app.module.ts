import { ModulesRouting } from './Modules/modules.routing';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Modules/login/login.component';
import { GridComponent } from './Modules/grid/grid.component';
import { TableComponent } from './Modules/table/table.component';
import { ConfirmModalComponent } from './Modules/table/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GridComponent,
    TableComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    ModulesRouting,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
