import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { routing, ZodiacV2RoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    routing
  ],
  providers: [ ZodiacV2RoutingModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
