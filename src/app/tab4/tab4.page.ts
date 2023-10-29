import { Component } from '@angular/core';
import { Compras } from '../models/product.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private dataService: DataService) {}

  public getCompras(){
    return this.dataService.compras;
  }

  public eliminarCompra(compra: Compras):void{
    this.dataService.compras.delete(compra);
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
