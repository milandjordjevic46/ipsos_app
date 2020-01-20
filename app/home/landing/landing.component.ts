import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import * as appSettings from "application-settings";
import { device } from "tns-core-modules/platform/platform";
import { PlatformLocation } from "@angular/common";
import { MainService } from "../../main.service";

const dialogs = require("ui/dialogs");
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  htmlString: string;
  afterImage: string;
  dailyImage: string;
  kviz_info;
  msgs_quiz = {
    en: "You have already completed the quiz!",
    sr: "Već ste popunili kviz danas!",
    sl: "Kviz ste že zaključili!",
    hr: "Već ste završili kviz!"
  };

  constructor(
    private router: Router,
    private location: PlatformLocation,
    private main_service: MainService
  ) {
    this.htmlString = `<div class="mmm">
        <div class="" style='text-align: center;'>Ovde treba upisati tekst za anekete koje se rade jednom dnevno i opet jednom dnevno jednom dnevno</div>
    </div>`;
    let txtPicture = device.language == "en" ? "sr" : device.language;
    this.afterImage = "~/assets/dugmekafa_" + txtPicture + ".png";
    this.dailyImage = "~/assets/dugmednevno_" + txtPicture + ".png";
  }

  ngOnInit() {
    this.location.onPopState(() => {
      this.takePoints();
    });
    this.takePoints();
  }

  takePoints() {
    let link =
      "racunanje_poena.php?id_ispitanika=" +
      appSettings.getString("ispitanikid") +
      "&lng=" +
      appSettings.getString("survey_lng") +
      "&select";
    this.main_service.get_points(link).subscribe(
      res => {
        this.kviz_info = res;
      },
      err => {
        console.log("err", err);
      }
    );
  }

  radiAnketu(what: string) {
    let country = appSettings.getString("survey_lng");
    let mail = appSettings.getString("emailIpsosApp");
    switch (what) {
      case "multiPerDay":
        let linkMulti =
          "https://online.ipsos-adria.com?code=5ct7sahzr34i10000010&ispitanikid=" +
          appSettings.getString("ispitanikid") +
          "&lng=" +
          appSettings.getString("survey_lng");
          if(mail == 'test@ipsos.com')
            linkMulti+= '&smaraci';
        this.router.navigate(["/survey", linkMulti]);
        break;
      case "quiz":
        let d = new Date();
        let day = d.getDay();
        let day_niz;
        if (!appSettings.getString("danD"))
          appSettings.setString("danD", JSON.stringify([]));
        day_niz = JSON.parse(appSettings.getString("danD"));
        if (day_niz.indexOf(day) != -1)
          return dialogs.alert({
            title: "",
            message: this.msgs_quiz[country],
            okButtonText: "OK!"
          });
        let quiz =
          "https://online.ipsos-adria.com?code=ayfh4w6yiksf10000011&ispitanikid=" +
          appSettings.getString("ispitanikid") +
          "&lng=" +
          appSettings.getString("survey_lng") +
          "&email=" +
          appSettings.getString("emailIpsosApp") +
          "&day=" +
          day +
          "&d";
        day_niz.push(day);
        if(mail == 'test@ipsos.com')
          quiz+= '&smaraci';
        appSettings.setString("danD", JSON.stringify(day_niz));
        console.log("quiz", quiz);
        this.router.navigate(["/survey", quiz]);
        break;
    }
  }

}
