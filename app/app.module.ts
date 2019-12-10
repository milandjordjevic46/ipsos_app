import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { LandingComponent } from "./home/landing/landing.component";
import { StatsComponent } from "./home/stats/stats.component";
import { LoaderComponent } from "./shared/loader/loader.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SurveyComponent } from "./shared/survey/survey.component";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";

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
    LoaderComponent,
    SurveyComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    HttpClientModule,
    NativeScriptLocalizeModule
  ],
  bootstrap: [AppComponent],
  // providers: [MainService, RequestsService, AuthService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
