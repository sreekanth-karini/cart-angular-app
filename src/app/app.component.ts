import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Masala and Spices (64 items)';
  	products : any = [{
  		"id" : 1,
  		"productImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1bOIdiFtENYVT5kMEP557FlIPOnT7lcLVBxa171SNfLp-Zro4&usqp=CAU",
  		"brandName" : "Brand 1",
  		"productName" : "Product 1",
  		"price" : 200,
  		"cartCount": 0
  	},
  	{
  		"id" : 2,
  		"productImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjoBoo4KerK-g87s7cKbvEEHCSWVU6_TVWGjZTD5q7L52UKVXO&usqp=CAU",
  		"brandName" : "Brand 2",
  		"productName" : "Product 2",
  		"price" : 300,
  		"cartCount": 0
  	},
  	{
  		"id" : 3,
  		"productImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1bOIdiFtENYVT5kMEP557FlIPOnT7lcLVBxa171SNfLp-Zro4&usqp=CAU",
  		"brandName" : "Brand 3",
  		"productName" : "Product 3",
  		"price" : 400,
  		"cartCount": 0
  	},
  	{
  		"id" : 4,
  		"productImage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjoBoo4KerK-g87s7cKbvEEHCSWVU6_TVWGjZTD5q7L52UKVXO&usqp=CAU",
  		"brandName" : "Brand 4",
  		"productName" : "Product 4",
  		"price" : 500,
  		"cartCount": 0
  	}
  	];
  	productsInCart: any = [];

	constructor(){

	}

	//Adding to Cart 
	addToCart(product){
		product.cartCount += 1;
		this.productsInCart.push(product);
				
	}

	//Removing from cart
	removeCart(product,index){
		this.productsInCart.splice(index,1);
		product.cartCount = 0;
	}


	//Adding product quantity
	quantityPlus(product){
		product.cartCount += 1;

	}

	//Removing product quantity
	quantityMinus(product, index){
		product.cartCount -= 1;
		if(product.cartCount <= 0){
			this.productsInCart.map(p=>{
			 	if(p.id == product.id){
			 		let indx = this.productsInCart.indexOf(p);
			 		this.productsInCart.splice(indx,1);
			 	};
			});
			
		}
	}

	//Total Cart Value
	getCartTotal(){
		let total:any = 0;
		this.productsInCart.map(p=>{
			 total += p.cartCount * p.price;
		});
		return total;
	}
	
	
}
