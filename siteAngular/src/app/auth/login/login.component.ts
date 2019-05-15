import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loading = false;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/admin']);
    })
  }

  tryLogin(){
    this.loading = true;
    let value = this.loginForm.value;
    
    this.authService.doLogin(value)
    .then(res => {
      console.log(res)
      this.loading = false;
      this.router.navigate(['/admin']);
    }, err => {
      this.loading = false;
      console.log(err);
    })
  }

  private initForm() {
    let email = '';
    let password ='';

    this.loginForm = new FormGroup({
      'email': new FormControl(email,[Validators.required,Validators.email]),
      'password': new FormControl(password,[Validators.required,Validators.minLength(6)]),
    })

  }

}
