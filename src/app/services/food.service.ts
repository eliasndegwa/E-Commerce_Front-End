import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
        {
          product_id:'1',
          product_name:'Cocacola',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:90,
          product_image:'/assets/images/2d567e496694416d371eae22f15435d7.jpeg',
          category:['milk']
        },
        {
          product_id:'2',
          product_name:'Fanta',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:50,
          product_image:'assets/images/2fc66dfcd00ba7030bcf3cf0152a02a3.jpeg',
          category:['soft-drink']
        },
        {
          product_id:'3',
          product_name:'Sprite',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:60,
          product_image:'/assets/images/maxresdefault.jpg',
          category:['alcohol']
        },
        {
          product_id:'4',
          product_name:'Krest',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:58,
          product_image:'assets/images/ScreenShot_20230522214256.jpeg',
          category:['soft-drink']
        },
        {
          product_id:'5',
          product_name:'Stoney',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:70,
          product_image:'/assets/images/ScreenShot_20230522215012.jpeg',
          category:['alcohol']
        },
        {
          product_id:'6',
          product_name:'Monster',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:160,
          product_image:'/assets/images/ScreenShot_20230522215148.jpeg',
          category:['milk']
        }
    ]
  }

  getAllFoodsBySearch(searchTerm: string):Food[]{
    return this.getAll().filter(food=>food.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllCategories():Category[]{
    return[
      {name:'All'},
      {name:'alcohol'},
      {name:'milk'},
      {name:'soft-drink'}
    ]
  }

  getAllFoodsByCategory(category:string):Food[]{
    if(category==='All'){
      return this.getAll()
    }
    return this.getAll().filter(food=>food.category?.includes(category))
  }

  getFoodById(product_id:string):Food{
    return this.getAll().find(food=>food.product_id==product_id)!
  }
}
