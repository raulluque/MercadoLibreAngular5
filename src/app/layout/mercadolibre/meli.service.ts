import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {config} from './config';
import 'rxjs/add/operator/map';
interface Authorize { access_token: string,
               refresh_token: string,
               user_id: string}
@Injectable()
export class MeliService {
  client_id:string;
  secret_key:string;
  access_token:string;
  redirect_uri:string;
  refresh_token:string;
  constructor(private http:HttpClient) { 
    this.client_id = config.client_id;
    this.secret_key = config.secret_key;
    this.redirect_uri = config.redirect_uri;
  }
  getAuthURL(){
    var query = {
        response_type: 'code',
        client_id: this.client_id,
        redirect_uri: this.redirect_uri
    };
    return config.auth_url + this.convertObjectToQueryString(query);
}
authorize(code:string, ) {
    let apiHeader = new HttpHeaders().set("Content-Type", "text/plain");
    return this.http.post<Authorize>(config.oauth_url,
    {
        grant_type: 'authorization_code',
        client_id: this.client_id,
        client_secret: this.secret_key,
        code: code,
        redirect_uri: this.redirect_uri
    },{headers:apiHeader}).map( data => data);

}
convertObjectToQueryString (obj):string {
      // Clone the object obj and loose the reference
      obj = Object.create(obj);
      if (!obj.access_token && this.access_token)
          obj.access_token = this.access_token;
      var result = '?';
      for (var i in obj) {
          result += i + "=";
          if (obj[i] != undefined) {
              if (Array.isArray(obj[i])) {
                  result += obj[i].join() + "&";
              } else {
                  result += obj[i] + "&";
              }
          }
      }
      if (result[result.length - 1] == '&') {
          result = result.substr(0, result.length - 1);
      }
      if (result == '?')
          result = '';
      return result;
  }

}
