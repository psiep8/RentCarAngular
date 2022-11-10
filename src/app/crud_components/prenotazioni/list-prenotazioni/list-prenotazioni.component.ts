import {Component, OnInit} from '@angular/core';
import {
  ActionEnum,
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "../../../components/tabella/myclasses";
import {Router} from "@angular/router";
import {CustomerService} from "../../../service/customer_service/customer.service";

@Component({
  selector: 'app-list-prenotazioni',
  templateUrl: './list-prenotazioni.component.html',
  styleUrls: ['./list-prenotazioni.component.css']
})
export class ListPrenotazioniComponent implements OnInit {
  prenotazioni: any = [];

  tableConfig!: MyTableConfig;
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  headers!: MyHeaders[];
  actions!: MyTableActions[];

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {

    this.getPrenotazioni();

    this.headers = [{
      key: "dataInizio",
      label: "Data Inizio"
    }, {
      key: "dataFine",
      label: "Data Fine"
    }, {
      key: "auto",
      label: "Veicolo"
    }]
    this.search = {
      columns: ["id", "dataInizio", "dataFine"],
      filterAllowed: false
    }
    this.order = {
      defaultColumn: "id", orderType: "desc"
    }
    this.pagination = {
      itemPerPage: 5, itemPerPageOptions: [5, 10]
    }
    this.tableConfig = {
      headers: this.headers, order: this.order, search: this.search, pagination: this.pagination, actions: this.actions
    }
    this.actions = [{
      icon: "",
      label: "Approva",
      customCssClass: "btn btn-dark",
      buttonOnTop: false,
      actionEnum: ActionEnum.APPROVAZIONE
    }]

  }

  getPrenotazioni(): void {
    this.customerService.getPrenotazioni().subscribe(prenotazioni => {
      this.prenotazioni = prenotazioni;
    });
  }

  onClickAction(event: any) {
    if (event.action.buttonOnTop === false) {
      if (event.action.actionEnum === ActionEnum.APPROVAZIONE) {
        this.customerService.approvaPrenotazione(event.dataRow.id).subscribe(res => {
          this.router.navigateByUrl("admin")
        })
      }
    }
  }
}
