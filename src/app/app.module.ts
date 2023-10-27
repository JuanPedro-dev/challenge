import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { GridComponent } from './view/dashboard/components/grid/grid.component';
import { IgxGridModule } from 'igniteui-angular';

import { provideEnvironmentNgxMask } from 'ngx-mask';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NewGridComponent } from './newgrid/newgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridComponent,
    NewGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
    IgxGridModule
  ],
  providers: [
    provideNgxMask(),
    provideEnvironmentNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
