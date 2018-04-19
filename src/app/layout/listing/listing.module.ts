import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutingModule
  ],
  declarations: [ListingComponent]
})
export class ListingModule { }
