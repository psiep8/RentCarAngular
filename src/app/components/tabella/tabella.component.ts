import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableActions, MyTableConfig} from "./myclasses";
import {MyButtonConfig} from "../button/button.component";
import {AutoService} from "../../service/auto_service/auto.service";
import {Auto} from "../../interfaces/auto";
import {Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Input() buttonConfig!: MyButtonConfig[];

  @Input() tableConfig!: MyTableConfig;

  @Input() data!: any [];

  @Input() actionConfig!: MyTableActions[];

  sortedOrder: string = '';

  key!: string;

  columns!: string[];

  filterText: string = '';

  selectedField: string = '';

  selectedItemsOption: string = '';

  itemsOptionsPage!: number [];

  page: number = 1;

  @Output() outputTable = new EventEmitter<any>();

  auto: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.columns = this.tableConfig.search.columns;
    this.itemsOptionsPage = this.tableConfig.pagination.itemPerPageOptions;
    this.key = this.tableConfig.order.defaultColumn;
    this.sortedOrder = this.tableConfig.order.orderType;
    this.selectedItemsOption = this.tableConfig.pagination.itemPerPage.toString();
    this.buttonConfig = this.actionConfig;
  }

  onSelect(key: string): void {
    this.page = 1;
    if (this.key !== key || this.sortedOrder === 'asc') {
      this.key = key
      this.sortedOrder = 'desc'
    } else {
      this.sortedOrder = 'asc'
    }
  }

  selectPage(page: number): void {
    this.page = page;
  }

  onClickButton(action: MyTableActions, dataRow: any) {
    this.outputTable.emit({action, dataRow})
    console.log(action)
    console.log(dataRow)
  }

  addNewItem(action: MyTableActions) {
    this.outputTable.emit({action});
  }

}
