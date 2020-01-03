import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MainService {
  // apiLink: string = "https://capi.ipsos.rs/client/mobile_app/";
  apiLink: string = "https://online.ipsos-adria.com/mobile_app/";

  constructor(private http: HttpClient) {}

  getDays(link: string) {
    return this.http.get(this.apiLink + link);
  }

  get_points(link: string) {
    return this.http.get(this.apiLink + link);
  }
}
