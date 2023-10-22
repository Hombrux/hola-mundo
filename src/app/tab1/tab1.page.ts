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
  public uniqueProducts:Set<Product> = new Set();
  public precio:number = 0;
  public total:number = 0;

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
      photo:"https://picsum.photos/670/300?random=",
      type:"Abarrotes"
    });
    this.products.push({
      name:"Gansito",
      price:30,
      photo:"https://picsum.photos/650/300?random=",
      type:"Abarrotes"
    });
    this.products.push({
      name:"Manzana",
      price:20,
      photo:"https://picsum.photos/650/300?random=",
      type:"Frutas y verduras"
    });
    this.products.push({
      name:"Pera",
      price:20,
      photo:"https://picsum.photos/650/300?random=",
      type:"Frutas y verduras"
    });
    this.products.push({
      name:"Mr Worldwide",
      price:30,
      photo:"https://picsum.photos/650/300?random=",
      type:"Limpieza"
    });
    this.products.push({
      name:"Cloro",
      price:18,
      photo:"https://picsum.photos/650/300?random=",
      type:"Limpieza"
    });
    this.products.push({
      name:"Aderall",
      price:100,
      photo:"https://picsum.photos/650/300?random=",
      type:"Farmacia"
    });
    this.products.push({
      name:"Paracetamol",
      price:100,
      photo:"https://picsum.photos/650/300?random=",
      type:"Farmacia"
    });

    this.productsFounds = this.products;
  }
  

  public getColor(tipo:string):string{
    switch(tipo){
      case "Abarrotes":
        return "primary";
      case "Frutas y verduras":
        return "danger";
      case "Limpieza":
        return "warning";
      case "Farmacia":
        return "medium"

    }
    return "primary"
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
    this.uniqueProducts.add(producto);
    this.total+=producto.price;
    console.log(this.uniqueProducts);
  }

  public deleteProducttoCart(producto:Product):void{
    this.productsShop.splice(this.productsShop.indexOf(producto),1)
    if(this.countProducttoCart(producto)==0){
      this.uniqueProducts.delete(producto);
    }
    this.total-=producto.price;
  }

  public countProducttoCart(producto:Product):number{
    return this.productsShop.filter(p=> p===producto).length;
  }

  public precioProducto(producto:Product):number{
    if (this.productsShop.filter(p=> p===producto)) {
      return producto.price*this.countProducttoCart(producto);
    }
    return 0;
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
