import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(){
    return this.http.get<Dish[]>(`${baseURL}/dishes`)
  }

  getDish(id: string){
    return this.http.get<Dish>(`${baseURL}/dishes/${id}`)
  }

  getFeaturedDish(){
    return this.http.get<Dish>(`${baseURL}/dishes?featured=true`).pipe(map(dishes  => dishes[0]))
  }

  getDishIds(){
    return this.getDishes().pipe(map((dishes => dishes.map(dish => dish.id))))
  }
}
