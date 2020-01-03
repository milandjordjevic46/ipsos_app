import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // apiLink: string = "https://capi.ipsos.rs/client/mobile_app/";
  apiLink: string = "https://online.ipsos-adria.com/mobile_app/";

  constructor(private http: HttpClient) {}

  login(link: string, data: object) {
    return this.http.post(this.apiLink + link, data);
  }
}
