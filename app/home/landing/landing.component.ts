import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import * as appSettings from "application-settings";
import { device } from "tns-core-modules/platform/platform";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  htmlString: string;
  afterImage: string;
  dailyImage: string;

  constructor(private router: Router) {
    this.htmlString = `<div class="mmm">
        <div class="" style='text-align: center;'>Ovde treba upisati tekst za anekete koje se rade jednom dnevno i opet jednom dnevno jednom dnevno</div>
    </div>`;
    let txtPicture = device.language == "en" ? "sr" : device.language;
    this.afterImage = "~/assets/dugmekafa_" + txtPicture + ".png";
    this.dailyImage = "~/assets/dugmednevno_" + txtPicture + ".png";
  }

  ngOnInit() {
    console.log("radi");
  }
  radiAnketu(what: string) {
    switch (what) {
      case "multiPerDay":
        let linkMulti =
          "https://cawi.ipsos.rs/sms3/indexCLT.php?projekatid=190929700102&tip_upitnikaid=38&clt&ispitanikid=" +
          appSettings.getString("ispitanikid") +
          "&lng=" +
          appSettings.getString("survey_lng");
        this.router.navigate(["/survey", linkMulti]);
        break;
      case "onePerDay":
        let linkOne =
          "https://cawi.ipsos.rs/sms3/indexCLT.php?projekatid=190929700102&tip_upitnikaid=38&clt&ispitanikid=" +
          appSettings.getString("ispitanikid") +
          "&lng=" +
          appSettings.getString("survey_lng");
        this.router.navigate(["/survey", linkOne]);
        break;
    }
  }
}
