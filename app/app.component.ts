import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import * as appSettings from "application-settings";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { PlatformLocation } from "@angular/common";
import { MainService } from "./main.service";
const dialogs = require("ui/dialogs");

@Component({
  selector: "app-root",
  template: `
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private page: Page) {
    // page.actionBarHidden = true;
  }
  ngOnInit() {
    console.log(appSettings.getString("token_tok"));
    firebase
      .init({
        showNotifications: true,
        showNotificationsWhenInForeground: false,
        onPushTokenReceivedCallback: token => {
          appSettings.setString("token_tok", token);
          console.log("[Firebase] onPushTokenReceivedCallback:", { token });
        },
        onMessageReceivedCallback: (message: firebase.Message) => {
          console.log("[Firebase] onMessageReceivedCallback:", { message });
          if (message.body && message.body.length)
            dialogs.alert({
              title: message.title !== undefined ? message.title : "",
              message: message.body,
              okButtonText: "OK!"
            });
          console.log("radi");
        }
      })
      .then(() => {
        console.log("[Firebase] Initialzed");
      })
      .catch(error => {
        console.log("[Firebase] Initialize", { error });
      });
  }
}
