import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  // IPL DATA STATIC OWN CREATED API----------------
  public iplTeamDataArr: any = [
    {
      tm_id: 1,
      tm_name: "CHENNAI SUPER KINGS",
      tm_img: './assets/card__icon/CSK.png',
      tm_points: 3,
      tm_played: 3,
      tm_won: 3,
      tm_nrr: 2.14,
    },
    {
      tm_id: 2,
      tm_name: "DELHI CAPITALS",
      tm_img: './assets/card__icon/DC.png',
      tm_points: 1,
      tm_played: 2,
      tm_won: 1,
      tm_nrr: 2.04,
    },
    {
      tm_id: 3,
      tm_name: "GUJRAT TITANS",
      tm_img: './assets/card__icon/GT.png',
      tm_points: 2,
      tm_played: 3,
      tm_won: 2,
      tm_nrr: 1.03,
    },
    {
      tm_id: 4,
      tm_name: "KOLKATA KNIGHT RIDERS",
      tm_img: './assets/card__icon/KKR.png',
      tm_points: 2,
      tm_played: 4,
      tm_won: 2,
      tm_nrr: 1.57,
    },
    {
      tm_id: 5,
      tm_name: "LUCKNOW SUPER GIANTS",
      tm_img: './assets/card__icon/LSG.png',
      tm_points: 1,
      tm_played: 3,
      tm_won: 1,
      tm_nrr: 0.07,
    },
    {
      tm_id: 6,
      tm_name: "MUMBAI INDIANS",
      tm_img: './assets/card__icon/MI.png',
      tm_points: 1,
      tm_played: 3,
      tm_won: 1,
      tm_nrr: 0.17,
    },
    {
      tm_id: 7,
      tm_name: "PUNJAB KINGS",
      tm_img: './assets/card__icon/PBKS.png',
      tm_points: 1,
      tm_played: 2,
      tm_won: 1,
      tm_nrr: 1.17,
    },
    {
      tm_id: 8,
      tm_name: "ROYAL CHALLENGERS BANGALORE",
      tm_img: './assets/card__icon/RCB.png',
      tm_points: 2,
      tm_played: 3,
      tm_won: 2,
      tm_nrr: 1.89,
    },
    {
      tm_id: 9,
      tm_name: "RAJASTHAN ROYALS",
      tm_img: './assets/card__icon/RR.png',
      tm_points: 3,
      tm_played: 3,
      tm_won: 3,
      tm_nrr: 0.20,
    },
    {
      tm_id: 10,
      tm_name: "SUNRISES HAYDRABAD",
      tm_img: './assets/card__icon/SRH.png',
      tm_points: 1,
      tm_played: 2,
      tm_won: 1,
      tm_nrr: 0.03,
    },

  ]


//----------- After calculation Array ----------------------
  public afterSorting:any = [];

  @HostListener('window:load')
  onLoad(){
    this.iplTeamDataArr.forEach((ele:any) => {
      console.log(ele.tm_id);
      if(ele.tm_nrr > 1.5){
        this.afterSorting.push(ele);
      }
      return  this.afterSorting;
    })

    this.afterSorting.forEach((ee:any) => {
      console.log(ee);
    })

    // this.afterSorting = this.iplTeamDataArr.sort((a:any, b:any) => (a.revenue > b.revenue) ? -1 : 1);
  }
   

}
