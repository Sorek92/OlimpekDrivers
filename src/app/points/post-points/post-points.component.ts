import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-points',
  templateUrl: './post-points.component.html',
  styleUrls: ['./post-points.component.scss']
})
export class PostPointsComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }


  createForm() {
    this.angForm = this.fb.group({
      point_name: ['', Validators.required ],
      point_adress_fv: ['', Validators.required ],
      point_adress: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
