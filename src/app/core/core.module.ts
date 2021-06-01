import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { LeftSidebarComponent } from './master/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { RouterModule } from '@angular/router';
import { EmployeesServiceClient } from './services/employees-client.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [MasterComponent, LeftSidebarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule,
    HttpClientModule,
  RouterModule],
  exports:[MasterComponent],
  providers:[EmployeesServiceClient]
})
export class CoreModule {}
