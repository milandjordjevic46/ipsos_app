import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { MainService } from "../main.service";
import * as appSettings from "application-settings";
import { Router } from "@angular/router";
import { PlatformLocation } from "@angular/common";
const dialogs = require("ui/dialogs");

@Component({
  selector: "app-daily-survey",
  templateUrl: "./daily-survey.component.html",
  styleUrls: ["./daily-survey.component.css"]
})
export class DailySurveyComponent implements OnInit {
  days: any;
  constructor(
    private page: Page,
    private service: MainService,
    private router: Router,
    private location: PlatformLocation
  ) {
    page.actionBarHidden = true;
  }

  stylingButtons(item): any {
    let style = "";
    let width = "50%";
    switch (item.status) {
      // 007bff96
      case "open":
        style = "linear-gradient(to right, #4496eff7 , #007bff)";
        width = "80%";
        break;
      case "done":
        style = "linear-gradient(to right, #28a74570 , 28a745)";
        break;
      case "started":
        style = "linear-gradient(to right, #ffc10785 , #ffc107)";
        break;
      case "closed":
        style = "linear-gradient(to right, #dc354594 , #dc3545)";
        break;
      default:
        style = "linear-gradient(to right, #0000004f , #e3e3e3)";
        width = "60%";
        break;
    }
    return {
      "background-image": style,
      width: width,
      border: 0,
      color: "black"
    };
  }

  ngOnInit() {
    // kad uradi anketu i ode na back vratice se i opet ce pozvati funckiju da uzme dane
    this.location.onPopState(() => {
      this.takeDays();
    });
    this.takeDays();
  }
  takeDays() {
    this.service
      // .getDays("get_days.php?ispitanikid=" + 1090)
      .getDays(
        "get_days.php?ispitanikid=" + appSettings.getString("ispitanikid")
      )
      .subscribe(
        res => {
          this.days = res;
          console.log(res);
        },
        err => {
          console.log(err, "ERROR");
        }
      );
  }

  goToSurvey(param): any {
    if (param.status !== "open" && param.status !== "started") {
      return dialogs.alert({
        title: "Oops!",
        message: "Sada nije moguće popuniti izveštaj za ovaj dan!",
        okButtonText: "OK!"
      });
    }
    let dan = param.day * 1 + 1;
    let link =
      "https://online.ipsos-adria.com?code=7k20zytjdeco10000007&id_ispitanika=" +
      appSettings.getString("ispitanikid") +
      "&lng=" +
      appSettings.getString("survey_lng") +
      "&day=" +
      dan +
      "&d";
    console.log(link);
    return this.router.navigate(["/survey", link]);
  }
}
