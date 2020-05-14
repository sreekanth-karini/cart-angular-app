import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

	test:string = 'CartDetailsComponent is intitializing';
	
  constructor() { }

  ngOnInit(): void {

  }

}
