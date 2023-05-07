import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutenavComponent } from './routenav/routenav.component';
import { SliderComponent } from './slider/slider.component';
import { PointsTableComponent } from './points-table/points-table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RoutenavComponent,
    SliderComponent,
    PointsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    RoutenavComponent,
    SliderComponent,
    PointsTableComponent
  ]
})
export class HomePageModule { }
