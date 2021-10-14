import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Service/shared.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor( private service : SharedService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getProducts().subscribe(
     (res:any) => 
     this.productList = res)
  }

}
