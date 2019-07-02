import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../event-details/voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  constructor(
    private authService: AuthService,
    private voterService: VoterService
  ) { }

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

  toogleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
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
