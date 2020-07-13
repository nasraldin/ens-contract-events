# ENS Contract Events

[Demo](https://ens-contract-events-test.azurewebsites.net).

- [SRS](https://github.com/nasraldin/ens-contract-events/blob/master/Docs/ENS%20Contract%20%20SRS%20v%200.1.docx) file
- [SIS](https://github.com/nasraldin/ens-contract-events/blob/master/Docs/ENS%20Contract%20SIs%20v.0.1.docx) file
- [Wireframe](https://github.com/nasraldin/ens-contract-events/blob/master/Docs/Client%20App%20Wireframe.png) 
- [Case Diagram](https://github.com/nasraldin/ens-contract-events/blob/master/Docs/ENS%20Contract%20Use%20Case%20Diagram.png) 
- [draw file](https://github.com/nasraldin/ens-contract-events/blob/master/Docs/ENS%20Contract%20Events.drawio) view by draw.io

For more info about project stories and status you can visit link porject dashboard
https://github.com/nasraldin/ens-contract-events/projects/1

## Development process
We use some of the DevOps principles for Continuous Integration (CI), Continuous Delivery (CD).
CD automates the release process building on the automated testing in CI so that new builds can be released at detecting staging prod release from repository pushed this will push to an azure pipeline to valid release and make sure the build is valid and tested for deploying to production

- [Azure DevOps Pipelines for our test app](https://nasraldin.visualstudio.com/ENS-Contract-Events/_build) 
- [Github repository actions](https://github.com/nasraldin/ens-contract-events/actions) 
- [Demo from azure pipeline automation build from prod stag](https://ens-contract-events-test.azurewebsites.net) 

- We provide 3 branches staging releases in our project for release test app. master for stable and tested, dev for development stag, prod for deploying to production.

## Development server
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
