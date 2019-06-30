import { Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { EventDetailsRouteActivatorService } from './events/event-details/event-details-route-activator.service';
import { CreateEventRouteDeactivatorService } from './events/create-event/create-event-route-deactivator.service';
import { EventListResolverService } from './events/events-list/event-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventRouteDeactivatorService] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: '../user/user.module#UserModule' }
];
