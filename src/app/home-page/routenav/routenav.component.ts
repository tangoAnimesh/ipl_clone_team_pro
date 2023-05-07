import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routenav',
  templateUrl: './routenav.component.html',
  styleUrls: ['./routenav.component.css']
})
export class RoutenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public display:boolean = false;

  toggle(){
     // false     // true
     console.log("1st value " + this.display);
     this.display =  !this.display;
     console.log("2nd value " +this.display);

  }

}
