import { Injectable } from "@angular/core";
import { ReqService } from "../request/req.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private requestsService: ReqService) {}

  login(email: string, pass: string) {
    this.requestsService.post("login.php", { email: email, password: pass });
  }
}
