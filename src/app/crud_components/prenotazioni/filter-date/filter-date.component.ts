import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PrenotazioniService} from "../../../service/prenotazioni_service/prenotazioni.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AutoService} from "../../../service/auto_service/auto.service";
import {Auto} from "../../../interfaces/auto";
import {Prenotazioni} from "../../../interfaces/prenotazioni";

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css']
})
export class FilterDateComponent implements OnInit {
  id!: number;
  prenotazione!: Prenotazioni;
  reactiveForm!: FormGroup;

  constructor(private prenotazioneService: PrenotazioniService, private autoService: AutoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      this.prenotazioneService.getPrenotazioneById(this.id).subscribe((prenotazione: Prenotazioni) => {
        this.prenotazione = prenotazione;
        this.reactiveForm.patchValue({
          id: this.prenotazione.id,
          dataInizio: this.prenotazione.dataInizio,
          dataFine: this.prenotazione.dataFine,
          approvata: this.prenotazione.approvata
        })
      }, error => console.log(error));
    }
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.id, [Validators.required]),
      dataInizio: new FormControl('', [Validators.required]),
      dataFine: new FormControl('', [Validators.required]),
      approvata: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.id != null) {
      this.router.navigate(['user/listAutoRange'], {
        queryParams: {
          inizio: this.reactiveForm.value.dataInizio,
          fine: this.reactiveForm.value.dataFine,
          id: this.id
        }
      });
    } else {
      this.router.navigate(['user/listAutoRange'], {
        queryParams: {
          inizio: this.reactiveForm.value.dataInizio,
          fine: this.reactiveForm.value.dataFine,
        }
      });
    }
  }

}
