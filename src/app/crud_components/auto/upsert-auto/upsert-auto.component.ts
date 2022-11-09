import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AutoService} from "../../../service/auto_service/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Auto} from "../../../interfaces/auto";
import {Customer} from "../../../interfaces/customer";

@Component({
  selector: 'app-add-auto',
  templateUrl: './upsert-auto.component.html',
  styleUrls: ['./upsert-auto.component.css']
})
export class UpsertAutoComponent implements OnInit {
  id!: number;
  auto!: Auto;
  reactiveForm!: FormGroup;

  constructor(private route: ActivatedRoute, private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      this.autoService.getAutoById(this.id).subscribe((auto: Auto) => {
        this.auto = auto;
        this.reactiveForm.patchValue({
          id: this.auto.id,
          marca: this.auto.marca,
          modello: this.auto.modello,
          cilindrata: this.auto.cilindrata
        })
      }, error => console.log(error));
    }
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.id, [Validators.required]),
      marca: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      modello: new FormControl('', [Validators.required, Validators.pattern('([a-zA-Z ]*)([0-9 ]*)')]),
      cilindrata: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('[0-9 ]*')]),
    });
  }

  submit() {
    if (this.id != null) {
      this.autoService.updateAuto(this.id, this.reactiveForm.value).subscribe(res => {
        this.router.navigateByUrl('auto');
      })
    } else {
      this.autoService.createAuto(this.reactiveForm.value).subscribe((res: any) => {
        this.router.navigate(['auto']);
      })
    }
  }


}
