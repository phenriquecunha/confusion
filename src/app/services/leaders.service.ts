import { Injectable } from '@angular/core';
import { lastValueFrom, of } from 'rxjs';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeadersService {

  constructor() {}

  getLeaders() {
    return of(LEADERS)
  }

  getLeader(id: string) {
    return of(LEADERS.filter((promo) => promo.id == id)[0])
  }

  getFeaturedLeader() {
    return of(LEADERS.filter((promo) => promo.featured)[0])
  }
}
