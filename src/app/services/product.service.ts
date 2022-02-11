import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId: any): Observable<Product[]> {

    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addProduct(product:Product) : Observable<any|Product>{
  const httpOptions={
    Headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.http.post<Product>(this.path,product).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
  }


  handleError(Error: HttpErrorResponse) {
    let errorMessage = ''
    if (Error.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + Error.error.message
    } else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }
}


