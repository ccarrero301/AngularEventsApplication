import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { ISession } from '../shared';
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(route => {
      this.event = this.eventService.getEvent(+route['id']);
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id));

      session.id = nextId + 1;
      this.event.sessions.push(session);

      this.eventService.updateEvent(this.event);

      this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}
