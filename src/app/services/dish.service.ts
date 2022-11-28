import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { Dish } from '../shared/dish';
@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  getDishes() {
    return this.http.get<Dish[]>(`${baseURL}/dishes`);
  }

  getDish(id: string) {
    return this.http.get<Dish>(`${baseURL}/dishes/${id}`);
  }

  getFeaturedDish() {
    return this.http
      .get<Dish>(`${baseURL}/dishes?featured=true`)
      .pipe(map((dishes) => dishes[0]));
  }

  getDishIds() {
    return this.getDishes().pipe(
      map((dishes) => dishes.map((dish) => dish.id))
    );
  }

  putDish(dish: Dish) {
    {
      return this.http.put<Dish>(`${baseURL}/dishes/${dish.id}`, dish, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      });
    }
  }
}
