import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import  {BaseUrl} from './baseUrl';
import { SearchingmoduleModule } from './searching/searchingmodule.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchingmoduleModule,
  ],

  providers: [BaseUrl],
  bootstrap: [AppComponent]
})
export class AppModule { }
