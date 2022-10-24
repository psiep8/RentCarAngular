import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../../interfaces/customer";
import {Prenotazioni} from "../../../interfaces/prenotazioni";
import {PrenotazioniService} from "../../../service/prenotazioni_service/prenotazioni.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-edit-date',
  templateUrl: './edit-date.component.html',
  styleUrls: ['./edit-date.component.css']
})
export class EditDateComponent implements OnInit {

  id!: number;

  prenotazione!: Prenotazioni;

  reactiveForm!: FormGroup;

  constructor(private prenotazioneService: PrenotazioniService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.prenotazioneService.getPrenotazioneById(this.id).subscribe((prenotazione: Prenotazioni) => {
      this.prenotazione = prenotazione;
    }, error => console.log(error));

    this.reactiveForm = new FormGroup({
      dataInizio: new FormControl('', [Validators.required]),
      dataFine: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    console.log(this.reactiveForm.value);
    this.prenotazioneService.updatePrenotazione(this.id, this.reactiveForm.value).subscribe(res => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('auto/listAutoRange');
    })
  }
}
