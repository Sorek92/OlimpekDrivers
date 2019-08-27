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
  tableOff: Boolean;

  constructor(private ps: PointsService) { }

  ngOnInit() {

    this.ps
      .getPoints()
      .subscribe((data: Points[]) => {
        this.points = data;

        //show table if points exists
        if(!this.points){
          this.tableOff = true;
        }else{
          this.tableOff = false;
        }
      })
  }


  collapse(i){
    console.log(i);
    var x = document.getElementById("collapse"+i);

    var q = x.classList.contains('show');
    console.log(q);
    if(q === false){
      x.classList.add('show');
      x.parentElement.style.backgroundColor = "#0095B3";
    }else{
      x.classList.remove('show');
      x.parentElement.style.backgroundColor = "";
    }
    console.log(x);
    

  }

}
