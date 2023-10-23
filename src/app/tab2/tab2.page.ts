import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public typeProduct = "";
  public statusType = false;
  public products: Product[] = [];
  public productsFounds: Product[]=[];
  
  public productsShop: Product[]=[];
  public uniqueProducts:Set<Product> = new Set();
  public precio:number = 0;
  public total:number = 0;
  

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
