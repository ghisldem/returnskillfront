import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  name =  new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.email]);
  email = new FormControl('', [Validators.required, Validators.email]);
  motDePasse = new FormControl('', [Validators.required, Validators.email]);
  confMotDePasse = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if (username === 'admin' && password === 'password') {
      this.router.navigate(['users-table1']);
    }

  }

  getErrorMessageName(){
    return this.name.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.name.hasError('name') ? 'Entrez un nom valide' :
        '';
  }

 getErrorMessageFirstname(){
    return this.firstname.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.firstname.hasError('firstname') ? 'Entrez un prénom valide' :
        '';

  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.email.hasError('email') ? 'Entrez un Email valide' :
        '';

  }
  getErrorMessageMotDePasse() {
    return this.motDePasse.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.motDePasse.hasError('motDePasse') ? 'Entrez un mot de passe valide' :
        '';

  }
  getErrorMessageConfMotDePasse() {
    return this.confMotDePasse.hasError('required') ? 'Vous devez renseigner ce champs' :
      this.confMotDePasse.hasError('confMotDePasse') ? 'Confirmer votre mot de passe' :
        '';

  }
}
