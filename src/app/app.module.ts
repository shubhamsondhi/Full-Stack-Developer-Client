import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModulesRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppModulesRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
