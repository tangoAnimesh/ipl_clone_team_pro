import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public imageInfoArray : any=[
    {
      pic:'./assets/hero__img/one.png',
      title:'bracewell',
      desc:'RCB player'
    },
    {
      pic:'./assets/hero__img/two.png',
      title:'captains',
      desc:'all teams'
    },
    {
      pic:'./assets/hero__img/three.png',
      title:'pant bumrah',
      desc:'DC MI player'
    },
    {
      pic:'./assets/hero__img/four.png',
      title:'Mukesh',
      desc:'CSK player'
    },
    {
      pic:'./assets/hero__img/five.png',
      title:'bairstow',
      desc:'PK player'
    }
  ];

}
