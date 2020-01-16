import { Component, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { MainService } from "../../main.service";

@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.css"]
})
export class OptionsComponent implements OnInit {
  support_mails: any;
  support: string;
  constructor(private router: Router, private page: Page) {
    page.actionBarHidden = true;
    this.support_mails = {
      sr: "istrazivanje@ipsos.rs",
      hr: "online.hr@mg.ipsosadria.com",
      sl: "online.si@mg.ipsosadria.com"
    };
  }
  ngOnInit() {
    this.support = this.support_mails[appSettings.getString("survey_lng")];
  }

  logOut() {
    appSettings.remove("emailIpsosApp");
    appSettings.remove("ispitanikid");
    this.router.navigate(["login"]);
  }
}
