import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [EventComponent, EventListingComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
