import { Component, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  webViewSrc: string;

  constructor(private route: ActivatedRoute) {
    this.webViewSrc = this.route.snapshot.paramMap.get("surveyLink");
  }

  ngOnInit() {
    console.log("radi");
  }
}
