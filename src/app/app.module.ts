import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppConfigService } from './services/app-config.service';
import { AppErrorHandler } from './app-error.handler';
import { Web3ConfigService } from './services/web3-config.service';
import { EventListComponent } from './components/event-list/event-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/string-filter.pipe';
import { AboutTaskComponent } from './components/about-task/about-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    FilterPipe,
    AboutTaskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    },
    Web3ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeWeb3,
      deps: [Web3ConfigService],
      multi: true
    },
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// The entry point of app initializations
export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.load();
}

// initializations of web3
export function initializeWeb3(appConfig: Web3ConfigService) {
  return () => appConfig.load();
}
