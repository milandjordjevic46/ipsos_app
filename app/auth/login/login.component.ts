import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import * as appSettings from "application-settings";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

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
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
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
    this.authService.login("appLogin.php", this.loginForm.value).subscribe(
      res => {
        appSettings.setString("emailIpsosApp", this.loginForm.value.email);
        this.router.navigate(["/home"]);
        this.progressLogin = false;
      },
      err => {
        console.log(err);
        this.progressLogin = false;
      }
    );
  }
}
