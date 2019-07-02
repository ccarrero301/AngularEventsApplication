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
  DurationPipe,
  UpVoteComponent
} from '../events/index';

import { appRoutes } from '../routes';
import { NavBarComponent } from '../nav/navbar.component';

import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from '../common/index';

import { Error404Component } from '../errors/404/404.component';
import { EventsAppComponent } from './events-app.component';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpVoteComponent,
    Error404Component
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
