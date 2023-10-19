// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ProductService } from '../product.service';
// import { Subscriber } from 'rxjs';
// import { Product } from '../product';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {

//     products: Product[] = []; 
//   constructor(private service :ProductService,private routes:Router){
//   }
//   category=[];
//   ngOnInit(): void {
//     this.service.getProducts().subscribe((data:Product[])=>{
//       console.log(data);
//       this.products=data;
//       // this.service.getallCategory().subscribe((Cdata:any)=>{
//       //   this.category=Cdata;
//       //})      
//       // console.log(Cdata);
//      this.service.dd().subscribe((Cdata:any)=>{
//         this.category=Cdata;
//        })
//     });

//   }
//   ondelete(id: number): void {
//     if (confirm('Are you Sure Want to delete')) {
//       // The user confirmed the deletion
//       this.service.deleteProducts(id).subscribe((data) => {
//         // Handle the result of the deletion, and navigate as needed
//         this.routes.navigate(['/Product-list']);
//       });
//     } else {
//       // The user canceled the deletion
//       // You can add code here to handle the cancellation if needed
//     }
//   }
  
//   }s



import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  category: any[] = [];
  isLoading = false;

  constructor(private service: ProductService, private routes: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.isLoading = false;
        // Handle the data or any additional logic here
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
        // Handle the error, e.g., show a message to the user
      }
    );

    this.service.dd().subscribe((Cdata: any) => {
      this.category = Cdata;
      // Handle category data if needed
    });
  }

  ondelete(id: number): void {
    if (confirm('Are you sure you want to delete?')) {
      this.isLoading = true;
      this.service.deleteProducts(id).subscribe(
        (data) => {
          this.isLoading = false;
          // Handle the result of the deletion, and navigate as needed
          this.routes.navigate(['/Product-list']);
        },
        (error) => {
          this.isLoading = false;
          console.error('Error deleting product:', error);
          // Handle the error, e.g., show a message to the user
        }
      );
    } else {
      // The user canceled the deletion
      // You can add code here to handle the cancellation if needed
    }
  }
}
