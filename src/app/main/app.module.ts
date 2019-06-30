import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventThumbnailComponent } from '../event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from '../nav/navbar.component';
import { EventDetailsComponent } from '../events/event-details/event-details.component';
import { appRoutes } from '../routes';

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
    EventDetailsComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
