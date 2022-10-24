import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../interfaces/auto";
import {AutoService} from "../../../service/auto_service/auto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-auto',
  templateUrl: './edit-auto.component.html',
  styleUrls: ['./edit-auto.component.css']
})
export class EditAutoComponent implements OnInit {
  id!: number;
  auto!: Auto;
  reactiveForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, private autoService: AutoService, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.autoService.getAutoById(this.id).subscribe((data: Auto) => {
      this.auto = data;
    });

    this.reactiveForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      modello: new FormControl('', [Validators.required]),
      cilindrata: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.autoService.updateAuto(this.id, this.reactiveForm.value).subscribe(res => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('auto');
    })
  }

}

