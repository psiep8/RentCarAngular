import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PrenotazioniService} from "../../../service/prenotazioni_service/prenotazioni.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css']
})
export class FilterDateComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private prenotazioneService: PrenotazioniService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      dataInizio: new FormControl(null),
      dataFine: new FormControl(null),
    });
  }

  submit() {
    console.log(this.reactiveForm.value);
    this.prenotazioneService.createPrenotazione(this.reactiveForm.value).subscribe(res => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('auto/listAutoRange');
    })
  }

}
