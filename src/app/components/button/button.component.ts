import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfig: MyButtonConfig;

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}

export class MyButtonConfig {

  icon: string;

  label: string;

  customCssClass: string;

}
