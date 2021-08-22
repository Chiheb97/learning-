import { LeaderService } from './../services/leader.service';
import { Leader } from './../shared/leader';
import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  featuredLeader! : Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService , private leaderService : LeaderService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.featuredLeader = this.leaderService.getFeaturedLead();

  }

}
