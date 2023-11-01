import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { GlobalPageComponent } from './components/global-page/global-page.component';

//importamos los paquetes para usar python
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs/public-api';
import { KatexModule } from 'ng-katex';
import { Test2Component } from './components/test2/test2.component';
import { CpiComponent } from './components/cpi/cpi.component';
import { ReloadComponent } from './components/reload/reload.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TestComponent,
    GlobalPageComponent,
    Test2Component,
    CpiComponent,
    ReloadComponent,
    TableOfContentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
