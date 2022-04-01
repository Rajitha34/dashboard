import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dash-demo';
  sideBarOpen = true;

ngOninit() {}
sideBarToggler(){
  this.sideBarOpen = !this.sideBarOpen;
}




}
