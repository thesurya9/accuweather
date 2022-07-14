/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   weatherDetail = {};
  constructor(
    private home : HomeService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getWether();
  }

  getWether(){
    this.home.getWethterDetail().subscribe((res:any)=>{
      if(res.length > 0){
        res[0].LocalObservationDateTime = moment(res[0].LocalObservationDateTime).format('dddd, DD MMMM')
        this.weatherDetail = res[0];
        console.log( this.weatherDetail)
      }
    },err=>{
      console.log(err)
    })
  }

}
