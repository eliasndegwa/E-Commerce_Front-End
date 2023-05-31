import { Food } from "./food";

export class CartItem{
    constructor(food:Food){
        this.food=food
    }
    food:Food
    quantity:number=1

    get price():number{
        return this.food.product_price*this.quantity
    }
}