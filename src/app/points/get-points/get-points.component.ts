import { Component, OnInit } from '@angular/core';
import Points from 'src/app/Points';
import { PointsService } from '../../points.service';

@Component({
  selector: 'app-get-points',
  templateUrl: './get-points.component.html',
  styleUrls: ['./get-points.component.scss']
})
export class GetPointsComponent implements OnInit {

  points : Points[];

  constructor(private ps: PointsService) { }

  ngOnInit() {

    this.ps
      .getPoints()
      .subscribe((data: Points[]) => {
        this.points = data;
      })
  }

}
