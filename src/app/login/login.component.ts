import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public formGroup: FormGroup = new FormGroup({
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthServiceService, private router: Router) {
  }
  public areCredentialsInvalid: boolean = true;
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      mobile: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    });

  }
  loginProcess() {
    
    if (this.formGroup.valid) {
      //this.areCredentialsInvalid = false;
      console.log("credentials", this.formGroup.value)
      this.authService.login(this.formGroup.value).subscribe(result => {
        console.log('sucess', result)
        localStorage.setItem('token',result.token)
        this.router.navigate(['./dashboard']);
      },
        err => {
          console.log('error', err)
          this.router.navigate(['./login'])
        }
      );
    }
  }
  public checkCredentials(formGroup: FormGroup) {
    this.authService.login(this.formGroup.value).subscribe(
      res => {
        if (res.token != null) {
          
          this.areCredentialsInvalid = true;
        }
        else {
          this.areCredentialsInvalid = false;
        }
      },
      err => {
        this.areCredentialsInvalid = false;
      });

  }

}


