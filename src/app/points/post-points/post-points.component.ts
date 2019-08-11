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
      point_goole_maps_adress: ['', Validators.required]
    });
  }

  addPoints(point_name, point_adress_fv, point_adress, point_goole_maps_adress) {
    this.bs.addPoints(point_name, point_adress_fv, point_adress, point_goole_maps_adress);
  }

  ngOnInit() {
  }

}
