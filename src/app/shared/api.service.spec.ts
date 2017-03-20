import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ApiService } from './api.service';
import {
  Http,
  Response,
  ResponseOptions,
  RequestMethod,
  Headers, ConnectionBackend, BaseRequestOptions
} from '@angular/http';

const mockProductList = [
  {
    'title': 'Angular T-Shirt',
    'price': 25.99,
    'popular': false,
    'rating': 4,
    'img': 'https://raw.githubusercontent.com/victormejia/victormejia.github.io/master/assets/images/ngshirt.png'
  },
  {
    'title': 'Comfy Hoodie',
    'price': 25.99,
    'popular': true,
    'rating': 4,
    'img': '../assets/img/ng-hoodie.png'
  }
 ];
describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
       MockBackend,
       BaseRequestOptions,
       {
         provide: Http,
         useFactory: (mockbackend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(mockbackend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
       },
       ApiService,
     ]
    });
  });

  it('should exist', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('getProducts', () => {

    it('should call api with correct url',
      async(inject([ApiService, MockBackend], (apiService: ApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe( (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe('/db/products.json');
        });

        apiService.getProducts();
      }))
    );

    it('should return a valid response',
      async(inject([ApiService, MockBackend], (apiService: ApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe( (connection: MockConnection) => {

          connection.mockRespond(new Response(
            new ResponseOptions({
              body: mockProductList
            })
          ));

        });

        let mockResult;

        apiService.getProducts().subscribe(resp => {
          mockResult = resp;
        });

        expect(mockResult).toEqual(mockProductList);
      }))
    );
  });
});
