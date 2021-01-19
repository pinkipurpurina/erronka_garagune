// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
export const environment = {
  production: false
};
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBTwxhPuE6VjTo283pN0h-jrWBkxm_mgRY",
    authDomain: "erronkagaragune.firebaseapp.com",
    databaseURL:
      "https://erronkagaragune-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "erronkagaragune",
    storageBucket: "erronkagaragune.appspot.com",
    messagingSenderId: "969301020862",
    appId: "1:969301020862:web:7426444bbc7f37555a4eef",
    measurementId: "G-DFPV5DWPN5",
  },
};
