import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { SurveyComponent } from "./shared/survey/survey.component";
import { LngComponent } from "./shared/lng/lng.component";
import { OptionsComponent } from "./shared/options/options.component";
import { DailySurveyComponent } from "./daily-survey/daily-survey.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "lng", component: LngComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "options", component: OptionsComponent, canActivate: [AuthGuard] },
  {
    path: "dialy_survey",
    component: DailySurveyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "survey/:surveyLink",
    component: SurveyComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
