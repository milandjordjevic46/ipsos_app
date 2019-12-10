import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as appSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";
import { WebView, LoadEventData } from "ui/web-view";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  @ViewChild("myDiv", { static: true }) webview: ElementRef;
  webViewSrc: string;

  constructor(private route: ActivatedRoute) {
    this.webViewSrc = this.route.snapshot.paramMap.get("surveyLink");
  }

  ngOnInit() {
    // if (this.webview.nativeElement.android) {
    //   this.webview.nativeElement.android
    //     .getSettings()
    //     .setDisplayZoomControls(false);
    //   this.webview.nativeElement.android
    //     .getSettings()
    //     .setBuiltInZoomControls(true);
    // }
  }
}
