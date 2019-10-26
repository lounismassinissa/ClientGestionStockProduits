
import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit' ;

@Injectable()
export class ProduitMockService {

  private PRODUITS: Produit [] = [];

  constructor(){
    const p1: Produit = new Produit('ref_1', 5, 2);
    const p2: Produit = new Produit('ref_2', 5, 2);
    const p3: Produit = new Produit('ref_3', 5, 2);
    const p4: Produit = new Produit('ref_4', 5, 2);
    const p5: Produit = new Produit('ref_5', 5, 2);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
    this.PRODUITS.push(p5);

  }


  public getProduits(): Produit[] {

    return this.PRODUITS;
  }

}
