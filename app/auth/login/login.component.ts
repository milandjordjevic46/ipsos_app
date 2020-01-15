import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { AuthService } from "../auth.service";
import * as appSettings from "application-settings";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { device } from "tns-core-modules/platform/platform";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
const dialogs = require("ui/dialogs");

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  progressLogin: Boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      // password: [null, Validators.required],
      lng: device.language
    });
  }
  ngOnInit() {
    // this.loginForm.value.email = appSettings.getString("emailIpsosApp") || null;
    // this.loginForm.value.password =
    //   appSettings.getString("passwordForIpsosApp") || null;
    // if (this.loginForm.value.email && this.loginForm.value.password) {
    //   this.authService.login(this.loginForm.value);
    // }
  }

  login(): void {
    this.progressLogin = true;
    const link = "appLogin.php?token=" + appSettings.getString("token_tok");
    this.authService.login(link, this.loginForm.value).subscribe(
      res => {
        appSettings.setString("emailIpsosApp", this.loginForm.value.email);
        appSettings.setString(
          "ispitanikid",
          JSON.stringify(res["ispitanikid"])
        );
        let options = {
          title: "",
          message: res["msg"],
          okButtonText: "OK!"
        };

        dialogs.alert(options).then(() => {
          this.router.navigate(["/home"]);
          this.progressLogin = false;
        });
      },
      err => {
        console.log("ERRRRRRRRR", err.error);
        if (err.error && err.error.msg) {
          dialogs.alert({
            title: "",
            message: err.error.msg,
            okButtonText: "OK!"
          });
        }
        this.progressLogin = false;
      }
    );
  }
}
