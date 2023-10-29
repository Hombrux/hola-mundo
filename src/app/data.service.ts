import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Compras } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public sharedProducts:Product[]=[];
  public uniqueProducts:Set<Product> = new Set();
  public favoriteProducts:Set<Product> = new Set();
  public carritosProducts: Set<Product> = new Set();
  public compras: Set<Compras> = new Set();
  public total:number = 0;


  constructor() {

  }
}