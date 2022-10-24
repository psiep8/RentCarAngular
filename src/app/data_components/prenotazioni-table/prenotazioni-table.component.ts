import {Component, OnInit} from '@angular/core';
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "../../components/tabella/myclasses";
import {PrenotazioniService} from "../../service/prenotazioni_service/prenotazioni.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Prenotazioni} from "../../interfaces/prenotazioni";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-prenotazioni-table',
  templateUrl: './prenotazioni-table.component.html',
  styleUrls: ['./prenotazioni-table.component.css']
})
export class PrenotazioniTableComponent implements OnInit {
  prenotazioni: any = [];

  tableConfig!: MyTableConfig;
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  headers!: MyHeaders[];
  actions!: MyTableActions[];

  constructor(private prenotazioniService: PrenotazioniService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPrenotazioni();
    this.headers = [{
      key: "inizio",
      label: "Data Inizio"
    }, {
      key: "fine",
      label: "Data Fine"
    }]
    this.search = {
      columns: ["id", "inizio", "fine"],
      filterAllowed: false
    }
    this.order = {
      defaultColumn: "id", orderType: "desc"
    }
    this.pagination = {
      itemPerPage: 2, itemPerPageOptions: [2, 3, 5]
    }
    this.actions = [{
      icon: "https://it.seaicons.com/wp-content/uploads/2016/11/Button-Add-icon.png",
      label: "Aggiungi nuova prenotazione",
      customCssClass: "btn btn-dark",
      buttonOnTop: true,
      buttonEdit: false
    }, {
      icon: "https://static.thenounproject.com/png/1054395-200.png",
      label: "Modifica",
      customCssClass: "btn btn-secondary",
      buttonOnTop: false,
      buttonEdit: true
    }, {
      icon: "https://img.favpng.com/15/18/2/button-delete-key-icon-png-favpng-QyKEi5YZShJs1T6X5mdfkLUSW.jpg",
      label: "Elimina",
      customCssClass: "btn btn-primary",
      buttonOnTop: false,
      buttonEdit: false

    }
    ]
    this.tableConfig = {
      headers: this.headers, order: this.order, search: this.search, pagination: this.pagination, actions: this.actions
    }

  }

  getPrenotazioni(): void {
    this.prenotazioniService.getPrenotazioni().subscribe(prenotazioni => this.prenotazioni = prenotazioni);
  }

  onClickAction(event: any) {
    if (event.action.buttonEdit === false && event.action.buttonOnTop === false) {
      this.prenotazioniService.deletePrenotazione(event.dataRow.id).subscribe(res => {
        this.prenotazioni = this.prenotazioni.filter((item: Prenotazioni) => item.id !== event.dataRow.id);
      })
    } else {
      this.router.navigate(['user/filter', event.dataRow.id])
    }
  }

  onFilter() {
    this.router.navigateByUrl('user/filter')
  }


}
