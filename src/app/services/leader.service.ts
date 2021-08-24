import { LEADERS } from './../shared/Leaders';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders() : Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }
  getLead(id : string):Promise<Leader> {
    return Promise.resolve( LEADERS.filter(leader => (leader.id === id))[0]);
  }

  getFeaturedLead():Promise<Leader>{

    return Promise.resolve( LEADERS.filter(leader => leader.featured)[0]);

  }
}
