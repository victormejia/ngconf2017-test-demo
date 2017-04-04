import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './shared/api.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const mockProduct = {
  title: 'Angular T-Shirt',
  price: 2499,
  popular: false,
  rating: 4,
  img: 'https://raw.githubusercontent.com/victormejia/victormejia.github.io/master/assets/images/ngshirt.png'
};

class MockApiService {
  getProducts() {
    return Observable.of([mockProduct]);
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let elem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ApiService, useClass: MockApiService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    elem = fixture.debugElement.nativeElement;
  });

  describe('ngOnInit', () => {
    it('should retrieve products', async(() => {
      component.ngOnInit();

      fixture.whenStable()
        .then(() => {
          expect(component.products).toEqual([mockProduct]);
        });
    }));
  });

});
