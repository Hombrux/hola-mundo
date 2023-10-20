import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public typeProduct = "";
  public statusType = false;
  public products: Product[] = [];
  public productsFounds: Product[]=[];
  public productsShop: Product[]=[];
  public filter=[
    "Abarrotes",
    "Frutas y verduras",
    "Limpieza",
    "Farmacia",
  ];
  constructor() {
    this.products.push({
      name:"Coca Cola",
      price:20,
      description:"Lorem ipsum dolor sit amet.w",
      photo:"https://picsum.photos/500/300?random=",
      type:"Abarrotes",
      color: "warning"
    });
    this.products.push({
      name:"Manzana",
      price:20,
      description:"‎",
      photo:"https://picsum.photos/500/300?random=",
      type:"Frutas y verduras",
      color: "danger"
    });
    this.products.push({
      name:"Mr Worldwide",
      price:30,
      description:"‎",
      photo:"https://picsum.photos/500/300?random=",
      type:"Limpieza",
      color: "primary"
    });

    this.productsFounds = this.products;
  }
  

  public getColor(){

  }
  public filterProducts():void{
    this.productsFounds = this.products.filter(
      item =>{
        return this.filter.includes(item.type);
      }
    )
    
  }

  public addProducttoCart(producto:Product):void{
    this.productsShop.push(producto);
    console.log(this.productsShop);
  }

  public deleteProducttoCart(producto:Product):void{
    this.productsShop.splice(this.productsShop.indexOf(producto),1)
    console.log(this.productsShop);
  }

  //
  selectType(type:string){
    if(this.typeProduct===type){
      this.statusType=false;
    }else{
      this.typeProduct = type;
      this.statusType = true;
    }
  }

}
