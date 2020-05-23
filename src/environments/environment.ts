// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCdIShkkamYUVJ8NVxGQ2s9rYcv97XZyrw",
    authDomain: "hospitalauth.firebaseapp.com",
    databaseURL: "https://hospitalauth.firebaseio.com",
    projectId: "hospitalauth",
    storageBucket: "hospitalauth.appspot.com",
    messagingSenderId: "597512133272",
    appId: "1:597512133272:web:c94b4d0a40bb76d191ceed",
    measurementId: "G-KTD2YETY73"
  }
};

export const baseUrl = `http://localhost:3000/api/`;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
