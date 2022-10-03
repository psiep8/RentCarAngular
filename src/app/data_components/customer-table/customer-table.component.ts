import {Component, OnInit} from '@angular/core';
import {Customer} from "../../customer";
import {CUSTOMERS} from "../../mock-customers";
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "../../components/tabella/myclasses";
import {CustomerService} from "../../service/customer_service/customer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  customers: Customer[] = [];
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
      key: "dataNascita",
      label: "Data di nascita"
    }]
    this.order = {
      defaultColumn: "id", orderType: "asc"
    }
    this.search = {
      columns: ["id", "nome", "cognome", "email", "telefono", "dataNascita"]
    }
    this.pagination = {
      itemPerPage: 2, itemPerPageOptions: [2, 3]
    }
    this.tableConfig = {
      headers: this.headers, order: this.order, search: this.search, pagination: this.pagination, actions: this.actions
    }


  }

  getCustomers(): void {
    this.customers = this.customerService.getCustomers()
    console.log('customer: ' + this.customers.toString())
  }

}
