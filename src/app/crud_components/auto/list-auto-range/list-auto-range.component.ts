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
import {AutoService} from "../../../service/auto_service/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PrenotazioniService} from "../../../service/prenotazioni_service/prenotazioni.service";
import {Prenotazioni} from "../../../interfaces/prenotazioni";

@Component({
  selector: 'app-list-auto-range',
  templateUrl: './list-auto-range.component.html',
  styleUrls: ['./list-auto-range.component.css']
})
export class ListAutoRangeComponent implements OnInit {

  auto: any = [];

  tableConfig!: MyTableConfig;
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  headers!: MyHeaders[];
  actions!: MyTableActions[];

  dataInizio!: any;
  dataFine!: any;

  token!: any;
  id!: number;

  constructor(private autoService: AutoService, private prenotazioneService: PrenotazioniService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.dataInizio = params['inizio']
      this.dataFine = params['fine']
      this.id = params['id']
    })

    this.getAutos();

    this.headers = [{
      key: "marca",
      label: "Marca"
    }, {
      key: "modello",
      label: "Modello"
    }, {
      key: "cilindrata",
      label: "Cilindrata"
    }]
    this.search = {
      columns: ["id", "marca", "modello", "cilindrata"],
      filterAllowed: false
    }
    this.order = {
      defaultColumn: "id", orderType: "desc"
    }
    this.pagination = {
      itemPerPage: 5, itemPerPageOptions: [5, 10]
    }
    this.actions = [{
      icon: "",
      label: "Prenota",
      customCssClass: "btn btn-primary",
      buttonOnTop: false,
      actionEnum: ActionEnum.PRENOTAZIONE
    }]

    this.tableConfig = {
      headers: this.headers, order: this.order, search: this.search, pagination: this.pagination, actions: this.actions
    }
  }

  getAutos() {
    this.autoService.getAutoInRange(this.dataInizio, this.dataFine).subscribe(auto => {
      this.auto = auto;
    })
  }

  onClickAction(event: any) {
    const rentToAdd: Prenotazioni = {
      id: 0,
      dataInizio: this.dataInizio,
      dataFine: this.dataFine,
      approvata: false
    };

    const rentToEdit: Prenotazioni = {
      id: this.id,
      dataInizio: this.dataInizio,
      dataFine: this.dataFine,
      approvata: false
    };

    if (this.id) {
      this.prenotazioneService.updatePrenotazione(this.id, rentToEdit, event.dataRow.id).subscribe(() => {
        this.router.navigateByUrl('user')
      })
    } else {
      this.prenotazioneService.createPrenotazione(rentToAdd, event.dataRow.id).subscribe(() => {
        this.router.navigateByUrl('user')
      })
    }
  }


}
