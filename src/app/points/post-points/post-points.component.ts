import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PointsService } from '../../points.service';


@Component({
  selector: 'app-post-points',
  templateUrl: './post-points.component.html',
  styleUrls: ['./post-points.component.scss']
})
export class PostPointsComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private bs: PointsService) { 
    this.createForm();
  }


  createForm() {
    this.angForm = this.fb.group({
      point_name: ['', Validators.required ],
      point_adress_fv: ['', Validators.required ],
      point_adress: ['', Validators.required ],
      point_google_maps_adress: ['', Validators.required],
      // point_time_open: ['', Validators.required],
      // point_time_deliver_required: ['', Validators.required]
    });
  }

  addPoints(point_name, point_adress_fv, point_adress, point_google_maps_adress, point_time_open, point_time_deliver_required) {
    this.bs.addPoints(point_name, point_adress_fv, point_adress, point_google_maps_adress, point_time_open, point_time_deliver_required);
  }

  ngOnInit() {
  }

}
