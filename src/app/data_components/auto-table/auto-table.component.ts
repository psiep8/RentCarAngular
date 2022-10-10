import {Component, OnInit} from '@angular/core';
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "../../components/tabella/myclasses";
import {AutoService} from "../../service/auto_service/auto.service";
import {Auto} from "../../interfaces/auto";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.css']
})
export class AutoTableComponent implements OnInit {
  auto: any = [];

  tableConfig!: MyTableConfig;
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  headers!: MyHeaders[];
  actions!: MyTableActions[];

  constructor(private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe(auto => {
      this.auto = auto;
    })
    this.headers = [{
      key: "id",
      label: "ID"
    }, {
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
      itemPerPage: 2, itemPerPageOptions: [2, 3, 5]
    }
    this.actions = [{
      icon: "https://it.seaicons.com/wp-content/uploads/2016/11/Button-Add-icon.png",
      label: "Aggiungi nuovo utente",
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

  onClickAction(event: any) {
    if (event.action.buttonEdit === false && event.action.buttonOnTop === false) {
      this.autoService.deleteAuto(event.dataRow.id).subscribe(res => {
        this.auto = this.auto.filter((item: Auto) => item.id !== event.dataRow.id);
        console.log('Post deleted successfully on auto-table component!');
        console.log(this.auto)
      })
    } else if (event.action.buttonOnTop === true) {
      this.router.navigate(['auto/add'])
    } else {
      this.router.navigate(['auto/edit', event.dataRow.id])
    }
  }
}
