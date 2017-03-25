import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let elem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    elem = fixture.debugElement.nativeElement;
  });

  describe('addToCart', () => {
    it('should call add on CartService', () => {
      // ...
    });
  });

  describe('editDetails', () => {
    it('should check permisions on UserService', () => {
      // ...
    });
  });

  describe('component functionality', () => {
    it('should render product title given an input', () => {

      component.product = {
        title: 'Angular T-Shirt',
        price: 25.99,
        popular: false,
        rating: 4,
        img: 'https://raw.githubusercontent.com/victormejia/victormejia.github.io/master/assets/images/ngshirt.png'
      };

      fixture.detectChanges();

      expect(elem.querySelector('.product-title').innerHTML).toBe(component.product.title);
    });
  });



});
