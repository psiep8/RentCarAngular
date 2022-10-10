import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AutoService} from "../../../service/auto_service/auto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.component.html',
  styleUrls: ['./add-auto.component.css']
})
export class AddAutoComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      marca: new FormControl('', [Validators.required]),
      modello: new FormControl('', [Validators.required]),
      cilindrata: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    console.log(this.reactiveForm.value);
    this.autoService.addAuto(this.reactiveForm.value).subscribe((res: any) => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('auto');
    })
  }


}
