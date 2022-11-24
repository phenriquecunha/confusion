import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeadersService } from '../services/leaders.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dishService = new DishService();
  promotionService = new PromotionService();
  leaderService = new LeadersService();

  dish: Dish;
  promotion: Promotion;
  leader: any;

  constructor() {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(dish => (this.dish = dish));
    this.promotionService
      .getFeaturedPromotion()
      .subscribe((promotion) => (this.promotion = promotion));
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }
}
