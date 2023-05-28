import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Food[]=[]
  constructor(private foodService:FoodService,
    private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm']){
        this.foods=this.foodService.getAll().filter(food=>food.product_name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      }
      else if(params['tag']){
        this.foods=this.foodService.getAllFoodsByTag(params['tag'])
      }
      else{
      this.foods=this.foodService.getAll()
      }
    })
  }
}
