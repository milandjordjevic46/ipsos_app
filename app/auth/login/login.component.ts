import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import * as appSettings from "application-settings";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  email: string;
  password: string;

  ngOnInit() {
    this.email = appSettings.getString("usernameIpsosApp") || null;
    this.password = appSettings.getString("passwordForIpsosApp") || null;
    if (this.email && this.password) {
      this.authService.login(this.email, this.password);
    }
  }

  login() {
    console.log(this.email, this.password, "MILAN LOGINa");
    this.authService.login(this.email, this.password);
  }
}
