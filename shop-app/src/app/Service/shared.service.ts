import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }


  getProducts():any{
    return this.http.get('https://fakestoreapi.com/products/');
  }
}
