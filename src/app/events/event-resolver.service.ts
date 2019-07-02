import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { EventService } from './shared';
import { IEvent } from './shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<IEvent> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    return this.eventService.getEvent(route.params['id']);
  }
}
