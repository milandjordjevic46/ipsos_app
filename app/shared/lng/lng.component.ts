import { Component, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { Router } from "@angular/router";

@Component({
  selector: "app-lng",
  templateUrl: "./lng.component.html",
  styleUrls: ["./lng.component.css"]
})
export class LngComponent implements OnInit {
  htmlString: string;
  btns: Object[];
  activeLng: string;
  view = require("ui/core/view");
  drawer;
  constructor(private router: Router) {
    this.htmlString = `<h1>Izaberite jezik za prikazivanje anketa</h1>`;
    this.btns = [
      { txt: "ENGLESKI", val: "en" },
      { txt: "HRVATSKI", val: "hr" },
      { txt: "SRPSKI", val: "sr" },
      { txt: "SLOVENACKI", val: "sl" }
    ];
  }

  ngOnInit() {
    this.activeLng = appSettings.getString("survey_lng");
  }

  chooseLng(language: string): void {
    appSettings.setString("survey_lng", language);
    this.activeLng = language;
  }

  saveAndGo(): void {
    this.router.navigate(["/home"]);
  }

  pageLoaded = function(args) {
    debugger;
    var page = args.object;
    console.log("argSSSSSS", args);
    this.drawer = this.view.getViewById(page, "sideDrawer");
  };

  toggleDrawer = function() {
    debugger;
    this.drawer.toggleDrawerState();
  };
}
