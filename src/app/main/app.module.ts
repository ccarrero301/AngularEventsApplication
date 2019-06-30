import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from '../events/index';

import { appRoutes } from '../routes';
import { NavBarComponent } from '../nav/navbar.component';
import { Error404Component } from '../errors/404/404.component';
import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
