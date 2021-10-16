import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem : number = 0;
  constructor(private cartSerice : CartService) { }

  ngOnInit(): void {
    this.cartSerice.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }


}
