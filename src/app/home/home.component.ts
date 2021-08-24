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
     this.dishservice.getFeaturedDish().then((dish)=>this.dish =dish);
    this.promotion = this.promotionservice.getFeaturedPromotion();
     this.leaderService.getFeaturedLead().then(fleader=>this.featuredLeader =fleader);

  }

}
