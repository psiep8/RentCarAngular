import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PrenotazioniService} from "../../../service/prenotazioni_service/prenotazioni.service";
import {Router} from "@angular/router";
import {AutoService} from "../../../service/auto_service/auto.service";
import {Auto} from "../../../interfaces/auto";

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css']
})
export class FilterDateComponent implements OnInit {

  auto!: Auto;
  reactiveForm!: FormGroup;

  constructor(private prenotazioneService: PrenotazioniService, private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      dataInizio: new FormControl(null),
      dataFine: new FormControl(null),
    });
  }

  submit() {
    sessionStorage.setItem("startDate", this.reactiveForm.value.dataInizio);
    sessionStorage.setItem("endDate", this.reactiveForm.value.dataFine);
    this.router.navigateByUrl('user/listAutoRange');

  }

}
