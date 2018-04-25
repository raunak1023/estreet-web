import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://127.0.0.1:9010';

  getConfig() {
    return this.http.get(this.configUrl + '/getPastPowerUsage', {
      headers: {
        'withCredentials' : 'true',
      }
    });
  }
}
