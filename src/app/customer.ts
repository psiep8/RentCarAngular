export interface Customer {
  id: number;
  nome: string;
  cognome: string;
  password?: string;
  email: string;
  telefono: string;
  dataDiNascita: string;
  customer?: boolean;
}
