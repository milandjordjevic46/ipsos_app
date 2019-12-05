import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  webViewSrc = "https://docs.nativescript.org/";

  constructor() {}

  ngOnInit() {}

  promeni() {
    console.log(this.webViewSrc);
    this.webViewSrc = "https://www.google.rs";
  }
}
