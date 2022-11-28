import { Component, OnInit, Inject } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { trigger, animation, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    trigger('visibility',[
      state('shown', style({
        transform: 'scale(1.0',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class DishdetailComponent implements OnInit {
  DISH = DISHES;
  dishIds: string[];
  selectedDish: Dish;
  prev: string;
  next: string;
  dishCopy: Dish;
  visibility: 'shown' | 'hidden' = 'shown'

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    @Inject('BaseURL') public BaseURL,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => {
        this.visibility='hidden';
        return this.dishService.getDish(params['id'])
      }))
      .subscribe((dish) => {
        this.selectedDish = dish;
        this.setPrevNext(dish.id);
        this.visibility = 'shown';
        this.dishCopy = dish;
      });
    this.dishService.getDishIds().subscribe((ids) => (this.dishIds = ids));
  }
  setPrevNext(id: string) {
    const index = this.dishIds.indexOf(id);
    this.prev =
      index == 0
        ? this.dishIds[this.dishIds.length - 1]
        : this.dishIds[index - 1];
    this.next =
      index == this.dishIds.length - 1
        ? this.dishIds[0]
        : this.dishIds[index + 1];
  }
}
