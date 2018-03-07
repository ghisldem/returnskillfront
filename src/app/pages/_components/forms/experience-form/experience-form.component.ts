import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  entreprise = new FormControl('', [Validators.required, Validators.email]);
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'color': 'primary'
    });
  } 

  ngOnInit() {
  }

  getErrorMessage() {
    return this.entreprise.hasError('required') ? 'Vous devez renseigner ce champs' :
        this.entreprise.hasError('entreprise') ? 'Entrez le nom de votre entreprise' :
            '';
  }

}
