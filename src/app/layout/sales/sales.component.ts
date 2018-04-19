import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  animations: [routerTransition()]
})
export class SalesComponent implements OnInit {

  constructor() { 
    console.log("hola")
  }

  ngOnInit() {
    console.log("hola")
  }

}
