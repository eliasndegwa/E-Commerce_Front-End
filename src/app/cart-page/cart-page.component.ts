import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart
  constructor(private cartService:CartService){
    this.setCart()
  }

  ngOnInit(): void {

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.product_id)
    this.setCart()
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.product_id,quantity)
    this.setCart()
  }

  setCart(){
    this.cart=this.cartService.getCart()
  }


}
