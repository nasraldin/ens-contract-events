import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnsContract } from '../models/ens-contract.model';

@Injectable({
  providedIn: 'root'
})
export class Web3ConfigService {
  static settings: EnsContract;

  constructor(private http: HttpClient) {}

  load(): Promise<EnsContract> {
    const jsonFile = `assets/config/ens-contract.json`;

    return new Promise<EnsContract>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then(data => {
          Web3ConfigService.settings = data as EnsContract;
          // console.log(Web3ConfigService.settings);
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
