import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';

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
  public precio:number = 0;

  public filter=[
    "Abarrotes",
    "Frutas y verduras",
    "Limpieza",
    "Farmacia",
  ];
  constructor(private dataService: DataService, public toastController: ToastController) {
    this.products.push({
      name:"Coca Cola",
      price:20,
      photo:"https://picsum.photos/650/300?random=",
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
    this.dataService.sharedProducts.push(producto);
    this.dataService.uniqueProducts.add(producto);
    this.dataService.total+=producto.price;
  }
  public addProducttoFavorites(producto:Product):void{
    this.dataService.favoriteProducts.add(producto);
  }
  selectType(type:string){
    if(this.typeProduct===type){
      this.statusType=false;
    }else{
      this.typeProduct = type;
      this.statusType = true;
    }
  }

  async mensajeProducto(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async mensajeFavorito(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado a favorito',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
