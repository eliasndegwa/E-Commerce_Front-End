import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/tag';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  productPageTags?:string[]

  @Input()
  justifyContent:string='center'
  
  tags?: Tag[];
  constructor(private foodService:FoodService){}
  ngOnInit(): void {
    if(!this.productPageTags)
    this.tags=this.foodService.getAllTags()
  }
}
