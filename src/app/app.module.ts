import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ResultDetailComponent,
    StopDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
