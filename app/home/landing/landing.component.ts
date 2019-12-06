import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as appSettings from "application-settings";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  webViewSrc =
    "https://cawi.ipsos.rs/sms3/indexCLT.php?projekatid=190929700102&tip_upitnikaid=38&clt";
  htmlString: string;

  constructor(private router: Router) {
    this.htmlString = `<div class="mmm">
        <div class="" style='text-align: center;'>Ovde treba upisati tekst za anekete koje se rade jednom dnevno i opet jednom dnevno jednom dnevno</div>
    </div>`;
  }

  ngOnInit() {
    console.log("radi");
  }
  radiAnketu(what: string) {
    switch (what) {
      case "multiPerDay":
        let linkMulti =
          "https://cawi.ipsos.rs/sms3/indexCLT.php?projekatid=190929700102&tip_upitnikaid=38&clt&mail=" +
          appSettings.getString("emailIpsosApp");
        this.router.navigate(["/survey", linkMulti]);
        break;
      case "onePerDay":
        let linkOne =
          "https://cawi.ipsos.rs/sms3/indexCLT.php?projekatid=190929700102&tip_upitnikaid=38&clt&mail=" +
          appSettings.getString("emailIpsosApp");
        this.router.navigate(["/survey", linkOne]);
        break;
    }
  }
}
