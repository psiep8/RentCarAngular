export class MyTableConfig {

  headers!: MyHeaders [];

  order!: MyOrder;

  search!: MySearch;

  pagination!: MyPagination;

  actions!: MyTableActions[];
}

export class MyHeaders {

  key!: string;

  label!: string;

}

export class MyOrder {

  defaultColumn!: string;

  orderType!: string;

}

export class MySearch {

  columns!: string[]

}

export class MyPagination {

  itemPerPage!: number;

  itemPerPageOptions!: number [];

}

export class MyTableActions {

  icon!: string;

  label!: string;

  customCssClass!: string;

  buttonOnTop!: boolean;

}


