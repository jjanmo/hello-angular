import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './section/display/display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SectionComponent, FooterComponent, DisplayComponent, ButtonsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
