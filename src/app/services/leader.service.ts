import { LEADERS } from './../shared/Leaders';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders() : Leader[]{
    return LEADERS;
  }
  getLead(id : string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLead(): Leader{

    return LEADERS.filter((leader) => leader.featured)[0];

  }
}
