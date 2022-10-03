import {Component, OnInit} from '@angular/core';
import {Customer} from "../../customer";
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "../../components/tabella/myclasses";
import {CustomerService} from "../../service/customer_service/customer.service";
import {CUSTOMERS} from "../../mock-customers";

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  customers: any = [];

  tableConfig!: MyTableConfig;
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  headers!: MyHeaders[];
  actions!: MyTableActions[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();

    this.headers = [{
      key: "id",
      label: "ID"
    }, {
      key: "nome",
      label: "Nome"
    }, {
      key: "cognome",
      label: "Cognome"
    }, {
      key: "email",
      label: "Email"
    }, {
      key: "telefono",
      label: "Telefono"
    }, {
      key: "dataDiNascita",
      label: "Data di nascita"
    }]
    this.order = {
      defaultColumn: "id", orderType: "desc"
    }
    this.search = {
      columns: ["id", "nome", "cognome", "email", "telefono", "dataNascita"]
    }
    this.pagination = {
      itemPerPage: 2, itemPerPageOptions: [2, 3, 5]
    }
    this.actions = [{
      icon: "https://it.seaicons.com/wp-content/uploads/2016/11/Button-Add-icon.png",
      label: "Aggiungi nuovo utente",
      customCssClass: "btn btn-dark",
      buttonOnTop: true
    }, {
      icon: "https://static.thenounproject.com/png/1054395-200.png",
      label: "Modifica",
      customCssClass: "btn btn-secondary",
      buttonOnTop: false
    }, {
      icon: "https://img.favpng.com/15/18/2/button-delete-key-icon-png-favpng-QyKEi5YZShJs1T6X5mdfkLUSW.jpg",
      label: "Elimina",
      customCssClass: "btn btn-primary",
      buttonOnTop: false
    }
    ]
    this.tableConfig = {
      headers: this.headers, order: this.order, search: this.search, pagination: this.pagination, actions: this.actions
    }


  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }


}
