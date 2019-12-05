import { Injectable } from "@angular/core";
import { request, HttpResponse } from "tns-core-modules/http/http";

@Injectable({
  providedIn: "root"
})
export class ReqService {
  apiLink: string = "https://capi.ipsos.rs/client/";
  constructor() {}

  get(link: string) {
    request({
      url: this.apiLink + link,
      method: "GET"
    }).then(
      (response: HttpResponse) => {
        return response;
      },
      e => {
        return e;
      }
    );
  }

  post(link: string, data?: any) {
    console.log(data, "DATA");
    request({
      url: this.apiLink + link,
      method: "POST",
      content: JSON.stringify(data)
    }).then(
      (response: HttpResponse) => {
        console.log("POST_LOGIN", response);
        return response;
      },
      e => {
        return e;
      }
    );
  }
}
