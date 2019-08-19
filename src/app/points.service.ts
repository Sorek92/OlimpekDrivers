import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  uri = 'http://localhost:3000/points';

  constructor(private http: HttpClient) { }

  addPoints(point_name, point_adress_fv, point_adress, point_google_maps_adress, point_time_open, point_time_deliver_required){
    
      const obj = {
        point_name: point_name,
        point_adress_fv: point_adress_fv,
        point_adress: point_adress,
        point_google_maps_adress: point_google_maps_adress,
        point_time_open: point_time_open,
        point_time_deliver_required: point_time_deliver_required
      };
      console.log('----------');
      console.log(obj);
      console.log('----------');

      this.http.post(this.uri+'/create', obj)
        .subscribe(res => console.log('Done'));
  }

  getPoints(){
    return this.http.get(this.uri);
  }


}
