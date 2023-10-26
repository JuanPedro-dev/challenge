import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FrontendComponent } from './components/frontend/frontend.component';
import { BackendComponent } from './components/backend/backend.component';
import { TestingComponent } from './components/testing/testing.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    FrontendComponent,
    BackendComponent,
    TestingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCheckboxModule,
    NgFor,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class HomeModule {}
