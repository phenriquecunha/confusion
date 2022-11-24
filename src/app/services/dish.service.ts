import { Injectable } from '@angular/core';
import { delay, lastValueFrom, of } from 'rxjs';
import { DISHES } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(){
    return of(DISHES)
  }

  getDish(id: string){
    return of(DISHES.filter(dish => dish.id == id)[0])
  }

  getFeaturedDish(){
    return of(DISHES.filter(dish => dish.featured)[0])
  }

  getDishIds(){
    return of(DISHES.map(dish => dish.id))
  }
}
