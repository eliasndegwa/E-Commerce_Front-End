import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-categories',
  templateUrl:'./categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  @Input()
  productPageCategories?:string[]

  @Input()
  justifyContent:string='center'
  
  tags?: Category[];
  constructor(private foodService:FoodService){}
  ngOnInit(): void {
    if(!this.productPageCategories)
    this.tags=this.foodService.getAllCategories()
  }
}
