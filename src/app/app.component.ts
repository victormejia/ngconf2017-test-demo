import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Array<any>;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts()
      .subscribe((data: any) => {
        this.products = data;
      });
  }
}
