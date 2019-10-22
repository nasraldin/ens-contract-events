import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../models/app-config.model';
import { AppConfigService } from '../../../services/app-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appConfig: AppConfig = new AppConfig();

  constructor() {}

  ngOnInit() {
    this.appConfig.appTitle = AppConfigService.settings.appTitle;
    this.appConfig.appVersion = AppConfigService.settings.appVersion;
    this.appConfig.tools = AppConfigService.settings.tools;
    this.appConfig.author = AppConfigService.settings.author;
  }
}
