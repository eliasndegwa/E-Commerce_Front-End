import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food';
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
          product_price:60,
          product_image:'/assets/images/2d567e496694416d371eae22f15435d7.jpeg',
          tags:['soft drink']
        },
        {
          product_id:'2',
          product_name:'Fanta',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:60,
          product_image:'assets/images/2fc66dfcd00ba7030bcf3cf0152a02a3.jpeg',
          tags:['soft drink']
        },
        {
          product_id:'3',
          product_name:'Sprite',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:60,
          product_image:'/assets/images/maxresdefault.jpg',
          tags:['soft drink']
        },
        {
          product_id:'4',
          product_name:'Krest',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:60,
          product_image:'assets/images/ScreenShot_20230522214256.jpeg',
          tags:['soft drink']
        },
        {
          product_id:'5',
          product_name:'Stoney',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:60,
          product_image:'/assets/images/ScreenShot_20230522215012.jpeg',
          tags:['soft drink']
        },
        {
          product_id:'6',
          product_name:'Monster',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident nam accusantium nostrum ipsa expedita!',
          product_price:60,
          product_image:'/assets/images/ScreenShot_20230522215148.jpeg',
          tags:['soft drink']
        }
    ]
  }
}
