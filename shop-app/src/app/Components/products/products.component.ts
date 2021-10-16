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
  searchKey:string = '';
  filterCategory :any;
  constructor( private service : SharedService, private cartSerice : CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getProducts().subscribe(
     (res:any) => {
      this.productList = res;
      this.filterCategory = res
      this.productList.forEach((item:any) => {
        if(item.category==="women's clothing" || item.category === "men's clothing"){
          item.category = "fashion";
        }
        Object.assign(item,{quantity:1,total:item.price})
      });
     }
     
     )

     this.cartSerice.search.subscribe((val:any)=>{
       this.searchKey = val;
     })
  }

  addToCart(item:any){
    this.cartSerice.addToCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList.filter((item:any)=>{
      if(item.category == category || category==''){
        return item;
      }
    })
    
  }

}
 