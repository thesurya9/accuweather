/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http : HttpClient
  ) { }

  getWethterDetail() {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=Gl1cYwVIjulUzBUEHZCyvGyD8c29oALq&language=en-us&details=false';
    return this.http.get(url);
  }

}
