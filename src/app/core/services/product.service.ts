import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>('assets/data/products.json');
  }

  getProductById(id: string) {
    return this.http
      .get<Product[]>('assets/data/products.json')
      .pipe(
        map(products =>
          products.find(p => p.id === id)!
        )
      );
  }
}
