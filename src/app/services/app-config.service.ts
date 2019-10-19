import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  static settings: AppConfig;

  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    const jsonFile = `assets/config/app-config.dev.json`;

    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then(data => {
          AppConfigService.settings = data as AppConfig;
          // console.log(AppConfigService.settings);
          resolve();
        })
        .catch((error: any) => {
          console.log(
            `Could not load file '${jsonFile}': ${JSON.stringify(error)}`
          );
          reject();
        });
    });
  }
}
