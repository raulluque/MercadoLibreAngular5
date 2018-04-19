import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  animations: [routerTransition()]
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
