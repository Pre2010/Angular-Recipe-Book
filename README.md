# AngularRecipeBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Firebase database

You will need to setup a Firebase account (https://firebase.google.com/) and click on 'Add project'. Go into your project and on the left side click on the 'Develop'
tab. Click on 'Database', use a 'Realtime Database'. Copy the link from your Firebase DB, should be located with in the 'Data' tab above your data (https://project-name-#####.firebaseio.com/). Paste that link in the environment.ts and environment.prod.ts file in the empty quotes for the field 'firebaseDbUrl'.

## Firebase authentication

Similar to the above step for setting up the account in Firebase and getting the database setup. After clicking on the 'Develop' tab, click on 'Authentication'.
Set up sign-in method here. Add a user here using 'Email/Password' Sign-in method. DO NOT enable Email link! After adding a user and setting up Authentication,
go to the gear icon in the top left next to 'Project Overview'. Under the 'General' tab, you should see the field called 'Web API Key'.
Copy that key and paste that in the environment.ts and environment.prod.ts file in the empty quotes for the field 'firebaseAPIKey'.

## Firebase Etc.

Also need to add your Firebase project name to the '.firebaserc' file as the 'default' value.

## Development server

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
