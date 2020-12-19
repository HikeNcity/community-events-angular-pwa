import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { AllEventsComponent } from './all-events/all-events.component';


@NgModule({
  declarations: [AdminComponent, AddEditEventComponent, AllEventsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
