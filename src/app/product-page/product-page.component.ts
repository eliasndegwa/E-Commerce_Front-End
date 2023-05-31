import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  food!:Food
constructor(
  private activatedRoute:ActivatedRoute,
  private foodservice:FoodService,
  private cartService:CartService,
  private router:Router
  ){
  activatedRoute.params.subscribe((params)=>{
    if(params['product_id']){
      this.food=foodservice.getFoodById(params['product_id'])
    }
  })
}
ngOnInit(): void {

}

addToCart(){
  this.cartService.addToCart(this.food)
  this.router.navigateByUrl('/cart')
}

}
