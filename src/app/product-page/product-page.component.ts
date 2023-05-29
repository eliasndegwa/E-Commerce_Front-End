import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  food!:Food
constructor(private activatedRoute:ActivatedRoute,private foodservice:FoodService){
  activatedRoute.params.subscribe((params)=>{
    if(params['product_id']){
      this.food=foodservice.getFoodById(params['product_id'])
    }
  })
}
ngOnInit(): void {

}

}
