import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title = "ipsos_app";

  constructor(private page: Page) {
    page.actionBarHidden = true;
  }
}
