import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);

      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy;
      });
    }
  }
}

function sortByNameAsc(session1: ISession, session2: ISession) {
  if (session1.name > session2.name) {
    return 1;
  } else if (session1.name === session2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(session1: ISession, session2: ISession) {
  return session2.voters.length - session1.voters.length;
}
