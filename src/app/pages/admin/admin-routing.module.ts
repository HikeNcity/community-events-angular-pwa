import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { AllEventsComponent } from './all-events/all-events.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: AllEventsComponent },
      { path: '/all-events', component: AllEventsComponent },
      { path: '/add-edit-event', component: AddEditEventComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
