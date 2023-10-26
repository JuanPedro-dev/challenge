import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaskDirective,
    NgIf,
  ],
  providers:[
    provideNgxMask()
  ]
})
export class FormModule { }
