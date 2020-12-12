import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: EventComponent,
    children: [
      { path: '', component: EventListingComponent},
      { path: 'listing', component: EventListingComponent},
      { path: 'details', component: EventDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
