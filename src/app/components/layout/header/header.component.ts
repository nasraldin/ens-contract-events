import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service';
import { AppConfig } from '../../../models/app-config.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appConfig: AppConfig = new AppConfig();

  constructor() {}

  ngOnInit() {
    this.appConfig.appTitle = AppConfigService.settings.appTitle;
    this.appConfig.companyLogo = AppConfigService.settings.companyLogo;
  }
}
