import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information.component';

const routes: Routes = [
  { path: ':id', component: PersonalInformationComponent },
  { path: 'add', component: PersonalInformationComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInformationRoutingModule { }
