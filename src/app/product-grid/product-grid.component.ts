import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
