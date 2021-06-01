import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationRoutingModule } from './personal-information-routing.module';
import { PersonalInformationComponent } from './personal-information.component';


@NgModule({
  declarations: [PersonalInformationComponent],
  imports: [
    CommonModule,
    PersonalInformationRoutingModule
  ]
})
export class PersonalInformationModule { }
