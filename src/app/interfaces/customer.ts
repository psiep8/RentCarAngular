import {Moment} from 'moment';
import * as moment from "moment";

export interface Customer {
  id: number;
  nome: string;
  cognome: string;
  password?: string;
  email: string;
  telefono: string;
  dataNascita: moment.Moment;
  customer?: boolean;
}
