import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { LeftSidebarComponent } from './master/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MasterComponent, LeftSidebarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule,
  RouterModule],
  exports:[MasterComponent]
})
export class CoreModule {}
