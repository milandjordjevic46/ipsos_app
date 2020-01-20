import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as appSettings from "application-settings";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadEventData } from "ui/web-view";
import { Page } from "tns-core-modules/ui/page/page";
import { WebView } from "tns-core-modules/ui/web-view";


@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  @ViewChild("myDiv", { static: true }) webview: ElementRef;
  webViewSrc: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private page: Page
  ) {
    // page.actionBarHidden = true;
    this.webViewSrc = this.route.snapshot.paramMap.get("surveyLink");
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("surveyLink"));
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
