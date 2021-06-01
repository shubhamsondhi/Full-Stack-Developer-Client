import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationRoutingModule } from './personal-information-routing.module';
import { PersonalInformationComponent } from './personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonalInformationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PersonalInformationRoutingModule
  ]
})
export class PersonalInformationModule { }
