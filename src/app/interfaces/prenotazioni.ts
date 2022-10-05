import * as moment from "moment/moment";

export interface Prenotazioni {
  id: number;
  inizio: moment.Moment;
  fine: moment.Moment;
  approvata?: boolean;
}
