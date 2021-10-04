import { Component, OnInit } from '@angular/core';
// import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.primengConfig.ripple = true;
  }
  paginate(event:any) {
   console.log(event)
   }

}
