import { Component, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.css"]
})
export class OptionsComponent implements OnInit {
  constructor(private router: Router, private page: Page) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}

  logOut() {
    appSettings.remove("emailIpsosApp");
    appSettings.remove("ispitanikid");
    this.router.navigate(["login"]);
  }
}
