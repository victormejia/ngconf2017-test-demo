import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './shared/api.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

class MockApiService {
  getProducts() {
    return Observable.create((observer: Observer<any>) => {
      observer.next([]);
    });
  }
}

describe('AppComponent', () => {
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

});
