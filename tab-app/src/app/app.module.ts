import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabButtonsComponent } from './tab-buttons/tab-buttons.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabButtonsComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
