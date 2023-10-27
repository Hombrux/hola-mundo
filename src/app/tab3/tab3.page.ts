import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private dataService: DataService, public toastController: ToastController) {}

  public getFavoriteProducts(){
    return this.dataService.favoriteProducts;
  }
  public addProducttoCart(producto:Product):void{
    this.dataService.sharedProducts.push(producto);
    this.dataService.uniqueProducts.add(producto);
    this.dataService.total+=producto.price;
  }
  public deleteProductOfFavorites(producto:Product):void{
    this.dataService.favoriteProducts.delete(producto);
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

  async mensajeProducto(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
