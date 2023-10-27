import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private dataService: DataService) {}

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
}
