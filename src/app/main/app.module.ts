import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { EventThumbnailComponent } from '../events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from '../nav/navbar.component';
import { EventDetailsComponent } from '../events/event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event/create-event.component';
import { Error404Component } from '../errors/404/404.component';

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
