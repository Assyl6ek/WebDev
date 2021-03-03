import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products, product } from "../products";
import { Input } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  @Input() product;
  array = [];

  routeParams = this.route.snapshot.paramMap;
  categoryIdFromRoute = Number(this.routeParams.get("categoryId"));
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.array = products.filter(
      product => product.categoryId === this.categoryIdFromRoute
    );
  }
  onRemove(removableProduct: product): void {
    this.array = this.array.filter(product => product != removableProduct);
  }
  // onRemove(removable: product) {
  //   var i = 0;
  //   for (let p in this.array) {
  //     if (p === removable) {
  //       delete this.array[i];
  //     }
  //     i++;
  //   }
  // }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
