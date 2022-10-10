import {Injectable} from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const customers = [{
      id: 1,
      nome: "Jamey",
      cognome: "Corinton",
      email: "jcorinton0@comsenz.com",
      telefono: "+850 557 905 9083",
      dataDiNascita: moment("4/13/2021").format('2021-04-13')
    }, {
      id: 2,
      nome: "Hally",
      cognome: "Ioannidis",
      email: "hioannidis1@rambler.ru",
      telefono: "+7 503 334 7060",
      dataDiNascita: moment("9/21/2022").format('2022-09-21')
    }, {
      id: 3,
      nome: "Tracey",
      cognome: "Dreger",
      email: "tdreger2@huffingtonpost.com",
      telefono: "+261 976 906 4477",
      dataDiNascita: moment("6/23/2022").format('2022-06-23')
    }, {
      id: 4,
      nome: "Sol",
      cognome: "Leake",
      email: "sleake3@whitehouse.gov",
      telefono: "+63 625 533 7455",
      dataDiNascita: moment("9/12/2022").format('2022-09-12')
    }, {
      id: 5,
      nome: "Vince",
      cognome: "Stokes",
      email: "vstokes4@examiner.com",
      telefono: "+86 422 977 2883",
      dataDiNascita: moment("1/27/2022").format('2022-01-27')
    }];

    const prenotazioni = [{
      id: 1,
      inizio: moment("11/04/2022").format('L'),
      fine: moment("08/02/2022").format('L'),
    }, {
      id: 2,
      inizio: moment("09/06/2022").format('L'),
      fine: moment("12/02/2022").format('L'),
    }, {
      id: 3,
      inizio: moment("01/03/2022").format('L'),
      fine: moment("03/09/2022").format('L'),
    }, {
      id: 4,
      inizio: moment("11/08/2022").format('L'),
      fine: moment("01/03/2022").format('L'),
    }, {
      id: 5,
      inizio: moment("11/08/2022").format('L'),
      fine: moment("06/12/2021").format('L'),
    }, {
      id: 6,
      inizio: moment("10/08/2022").format('L'),
      fine: moment("06/12/2021").format('L'),
    }]

    const auto = [{
      "id": 1,
      "marca": "Jaguar",
      "modello": "XK",
      "cilindrata": 157
    }, {
      "id": 2,
      "marca": "BMW",
      "modello": "M3",
      "cilindrata": 192
    }, {
      "id": 3,
      "marca": "BMW",
      "modello": "X6 M",
      "cilindrata": 152
    }, {
      "id": 4,
      "marca": "Cadillac",
      "modello": "Escalade ESV",
      "cilindrata": 172
    }, {
      "id": 5,
      "marca": "Mazda",
      "modello": "Miata MX-5",
      "cilindrata": 84
    }, {
      "id": 6,
      "marca": "Ford",
      "modello": "Crown Victoria",
      "cilindrata": 168
    }, {
      "id": 7,
      "marca": "Land Rover",
      "modello": "Range Rover",
      "cilindrata": 118
    }, {
      "id": 8,
      "marca": "Mitsubishi",
      "modello": "Diamante",
      "cilindrata": 85
    }]
    return {customers, prenotazioni, auto};
  }

  constructor() {
  }
}
