import * as moment from "moment/moment";
import {Customer} from "./customer";
import {Auto} from "./auto";

export interface Prenotazioni {
  id: number;
  dataInizio: moment.Moment;
  dataFine: moment.Moment;
  approvata?: boolean;
}
