import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product.model';

@Injectable()
export class ApiService {

  baseUrl = '/db';

  constructor(public http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/products.json`)
      .map((res: Response) => res.json());
  }

  getProduct(id: number) {
    return this.http.get(`${this.baseUrl}/products/${id}.json`)
      .map((res: Response) => res.json())
  }


}
