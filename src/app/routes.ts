import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventDetailsRouteActivatorService,
  CreateEventRouteDeactivatorService,
  EventListResolverService
} from './events/index';

import { Error404Component } from './errors/404/404.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventRouteDeactivatorService] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: '../user/user.module#UserModule' }
];
