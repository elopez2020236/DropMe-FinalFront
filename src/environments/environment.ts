// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCmaGJMgg0YnmdvUjSSEf1CfbPCjSlK9kw",
    authDomain: "dropme-486c7.firebaseapp.com",
    projectId: "dropme-486c7",
    storageBucket: "dropme-486c7.appspot.com",
    messagingSenderId: "90415189062",
    appId: "1:90415189062:web:42414ca5f8cbe9c5030e47",
    measurementId: "G-VLGRWW07S9"
  },
  firebase: {
    apiKey: "AIzaSyCmaGJMgg0YnmdvUjSSEf1CfbPCjSlK9kw",
    authDomain: "dropme-486c7.firebaseapp.com",
    projectId: "dropme-486c7",
    storageBucket: "dropme-486c7.appspot.com",
    messagingSenderId: "90415189062",
    appId: "1:90415189062:web:42414ca5f8cbe9c5030e47",
    measurementId: "G-VLGRWW07S9"
  }
};

export const environment2 = {
  production: false,
  apiURL:'http://localhost:3000/api',
  departamentos : [
    {codigo:"San Juan Sacatepéquez", nombre:"San Juan Sacatepéquez"},
    {codigo:"Villa Canales", nombre:"Villa Canales"},
    {codigo:"Amatitlán", nombre:"Amatitlán"},
    {codigo:"San Miguel Petapa", nombre:"San Miguel Petapa"},
    {codigo:"Chinautla", nombre:"Chinautla"},
    {codigo:"Fraijanes", nombre:"Fraijanes"},
    {codigo:"San Pedro Sacatepéquez", nombre:"San Pedro Sacatepéquez"},
    {codigo:"San Raymundo", nombre:"San Raymundo"},
    {codigo:"Chuarrancho", nombre:"Chuarrancho"},
    {codigo:"San José del Golfo", nombre:"San José del Golfo"},
    {codigo:"Guatemala", nombre:"Guatemala"},
    {codigo:"Mixco", nombre:"Mixco"},
    {codigo:"San José Pinula", nombre:"San José Pinula"},
    {codigo:"Santa Catarina Pinula", nombre:"Santa Catarina Pinula"},
    {codigo:"Palencia", nombre:"Palencia"},
    {codigo:"San Pedro Ayampuc", nombre:"San Pedro Ayampuc"},
    {codigo:"Villa Nueva", nombre:"Villa Nueva"},

  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
