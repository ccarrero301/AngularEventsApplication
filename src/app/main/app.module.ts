import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from '../events/index';

import { appRoutes } from '../routes';
import { NavBarComponent } from '../nav/navbar.component';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { Error404Component } from '../errors/404/404.component';
import { EventsAppComponent } from './events-app.component';
import { CollapsibleWellComponent } from '../common/collaspsible-well.component';

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    Error404Component
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
