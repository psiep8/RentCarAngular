import {Component, OnInit} from '@angular/core';
import {Customer} from "../../interfaces/customer";
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "../../components/tabella/myclasses";
import {CustomerService} from "../../service/customer_service/customer.service";
import {Auto} from "../../interfaces/auto";
import {Router} from "@angular/router";

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

  constructor(private customerService: CustomerService, private router: Router) {
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
    this.search = {
      columns: ["id", "nome", "cognome", "email", "telefono", "dataNascita"],
      filterAllowed: true
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

  private getCustomers() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      console.log(customers)
    })
  }

  onClickAction(event: any) {
    if (event.action.buttonEdit === false && event.action.buttonOnTop === false) {
      this.customerService.deleteCustomer(event.dataRow.id).subscribe(res => {
        this.customers = this.customers.filter((item: Customer) => item.id !== event.dataRow.id);
        this.getCustomers();
      })
    } else if (event.action.buttonOnTop === true) {
      this.router.navigate(['admin/add'])
    } else {
      this.router.navigate(['admin/edit', event.dataRow.id])
    }
  }

}
