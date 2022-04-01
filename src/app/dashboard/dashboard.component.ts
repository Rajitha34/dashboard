import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  exform: FormGroup = new FormGroup({});
  subform: FormGroup = new FormGroup({});
  pincodearray: any;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {

    this.exform = new FormGroup({
      'shop_name': new FormControl(null, Validators.required),
      'opening_time': new FormControl(null, Validators.required),
      'closing_time': new FormControl(null, Validators.required),
      'pincode': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'owner_mobile': new FormControl(null, Validators.required),
      'owner_name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'passwordConfirm': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'lat': new FormControl(null, Validators.required),
      'long': new FormControl(null, Validators.required),
    });
    this.subform = new FormGroup({
      'pincode': new FormControl(null, Validators.required)
    })
  }
  registerprocess() {
    if (this.exform.valid) {
      console.log(JSON.stringify(this.exform.value));
      this.authService.register(this.exform.value).subscribe((result: any) => {
        console.log('sucess', result)
      },
        (err: any) => {
          console.log('error', err)
        });
    }
  }
  clicksub() {
    console.log("in")
    if (this.subform.valid) {
      console.log("demo",this.subform.value);
      this.authService.sub(this.subform.value).subscribe((result: any) => {
        console.log('sucess', result)
        this.pincodearray = result.data;
        console.log(this.pincodearray)
      },
        (err: any) => {
          console.log('error', err)
        });
    }
  }
  get shop_name() {
    return this.exform.get('shop_name')
  }
  get opening_time() {
    return this.exform.get('opening_time');
  }
  get closing_time() {
    return this.exform.get('closing_time');
  }
  get pincode() {
    return this.exform.get('pincode');
  }
  get address() {
    return this.exform.get('address');
  }
  get owner_mobile() {
    return this.exform.get('owner_mobile');
  }
  get owner_name() {
    return this.exform.get('owner_name');
  }
  get password() {
    return this.exform.get('password');
  }
  get passwordConfirm() {
    return this.exform.get('passwordConfirm');
  }
  get image() {
    return this.exform.get('image');
  }
  get lat() {
    return this.exform.get('lat');
  }
  get long() {
    return this.exform.get('long')
  }
}
export class CreateShopRequest {
  shop_name?: string;
  opening_time?: string;
  closing_time?: string;
  pincode?: number;
  address?: string;
  owner_mobile?: number;
  owner_name?: string;
  password?: string;
  passwordConfirm?: string;
  image?: string;
  latitude?: number;
  longitude?: number;

}


