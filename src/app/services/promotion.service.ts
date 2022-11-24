import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, of } from 'rxjs';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getPromotions(){
    return of(PROMOTIONS)
  }

  getPromotion(id: string){
    return of(PROMOTIONS.filter(promo => promo.id == id)[0])
  }

  getFeaturedPromotion(){
    return of(PROMOTIONS.filter(promo => promo.featured)[0])
  }
}
