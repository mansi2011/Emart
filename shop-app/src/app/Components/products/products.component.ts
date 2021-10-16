import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { SharedService } from 'src/app/Service/shared.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor( private service : SharedService, private cartSerice : CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getProducts().subscribe(
     (res:any) => {
      this.productList = res;
      this.productList.forEach((item:any) => {
        Object.assign(item,{quantity:1,total:item.price})
      });
     }
     
     )
  }

  addToCart(item:any){
    this.cartSerice.addToCart(item);
  }

}
