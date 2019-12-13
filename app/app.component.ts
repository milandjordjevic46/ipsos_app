import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import * as appSettings from "application-settings";
import { device } from "tns-core-modules/platform/platform";
const dialogs = require("ui/dialogs");
import { overrideLocale } from "nativescript-localize/localize";
@Component({
  selector: "app-root",
  template: `
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(device.language, "DL");
    const localeOverriddenSuccessfully = overrideLocale("sr");
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
          dialogs.alert({
            title: message.title !== undefined ? message.title : "",
            message: message.body,
            okButtonText: "OK!"
          });
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
