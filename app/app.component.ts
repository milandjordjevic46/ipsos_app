import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import * as appSettings from "application-settings";

@Component({
  selector: "app-root",
  template: `
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(appSettings.getString("token_tok"));
    // firebase.messaging().getToken();
    // firebase
    //   .init({
    //     showNotifications: true,
    //     showNotificationsWhenInForeground: true,
    //     onPushTokenReceivedCallback: token => {
    //       appSettings.setString("token_tok", token);
    //       console.log("[Firebase] onPushTokenReceivedCallback:", { token });
    //     },
    //     onMessageReceivedCallback: (message: firebase.Message) => {
    //       console.log("[Firebase] onMessageReceivedCallback:", { message });
    //     }
    //   })
    //   .then(() => {
    //     console.log("[Firebase] Initialized");
    //   })
    //   .catch(error => {
    //     console.log("MILAN", firebase.getCurrentUser());
    //     console.log("[Firebase] Initialize", { error });
    //   });
  }
}
