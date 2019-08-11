import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  uri = 'http://localhost:4000/points';

  constructor(private http: HttpClient) { }

  addPoints(point_name, point_adress_fv, point_adress, point_google_maps_adress){
    
      const obj = {
        point_name: point_name,
        point_adress_fv: point_adress_fv,
        point_adress: point_adress,
        point_google_maps_adress: point_google_maps_adress
      };
      console.log('----------')
      console.log(obj);
      console.log('----------')

      this.http.post('${this.uri}/create', obj)
        .subscribe(res => console.log('Done'));
  }

}
