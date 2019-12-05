import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { LandingComponent } from "./home/landing/landing.component";
import { StatsComponent } from "./home/stats/stats.component";
import { LoaderComponent } from './shared/loader/loader.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LandingComponent,
    StatsComponent,
    LoaderComponent
  ],
  imports: [NativeScriptModule, AppRoutingModule],
  bootstrap: [AppComponent],
  // providers: [MainService, RequestsService, AuthService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
