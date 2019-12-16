import { Component, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { Router } from "@angular/router";

@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.css"]
})
export class OptionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  logOut() {
    appSettings.remove("emailIpsosApp");
    appSettings.remove("ispitanikid");
    this.router.navigate(["login"]);
  }
}
