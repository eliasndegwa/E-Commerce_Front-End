import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Food } from '../models/food';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart()

  addToCart(food:Food):void{
    let cartItem=this.cart.items.find(item=>item.food.product_id===food.product_id)
    if(cartItem){
      this.changeQuantity(food.product_id,cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food))
  }

  changeQuantity(productId:string,quantity:number){
    let cartItem=this.cart.items.find(item=>item.food.product_id===productId)
    if(!cartItem) return;
    cartItem.quantity=quantity
  }

  removeFromCart(productId:string):void{
    this.cart.items=this.cart.items.filter(item=>item.food.product_id!=productId)
  }

  getCart():Cart{
    return this.cart
  }
}
