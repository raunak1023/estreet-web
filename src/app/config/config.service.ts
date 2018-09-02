import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://127.0.0.1:9010';

  getRequest(path) {
    return this.http.get(this.configUrl + path, {
      headers: {
        'withCredentials' : 'true',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'origin, content-type, accept, x-requested-with'
      }
    });
  }
}
