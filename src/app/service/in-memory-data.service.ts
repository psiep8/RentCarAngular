import {Injectable} from '@angular/core';

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
      dataDiNascita: "9/12/2022"
    }, {
      id: 2,
      nome: "Hally",
      cognome: "Ioannidis",
      email: "hioannidis1@rambler.ru",
      telefono: "+7 503 334 7060",
      dataDiNascita: "10/28/2021"
    }, {
      id: 3,
      nome: "Tracey",
      cognome: "Dreger",
      email: "tdreger2@huffingtonpost.com",
      telefono: "+261 976 906 4477",
      dataDiNascita: "7/4/2022"
    }, {
      id: 4,
      nome: "Sol",
      cognome: "Leake",
      email: "sleake3@whitehouse.gov",
      telefono: "+63 625 533 7455",
      dataDiNascita: "6/30/2022"
    }, {
      id: 5,
      nome: "Vince",
      cognome: "Stokes",
      email: "vstokes4@examiner.com",
      telefono: "+86 422 977 2883",
      dataDiNascita: "8/26/2022"
    }];

    const prenotazioni = [{
      id: 1,
      inizio: "21/04/2022",
      fine: "08/02/2022",
    }, {
      id: 2,
      inizio: "29/06/2022",
      fine: "13/02/2022",
    }, {
      id: 3,
      inizio: "01/03/2022",
      fine: "03/09/2022",
    }, {
      id: 4,
      inizio: "21/08/2022",
      fine: "01/03/2022",
    }, {
      id: 5,
      inizio: "16/08/2022",
      fine: "06/12/2021",
    }, {
      id: 6,
      inizio: "16/08/2022",
      fine: "06/12/2021",
    }]
    return {customers, prenotazioni};
  }

  constructor() {
  }
}
