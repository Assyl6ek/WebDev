import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { product, products } from "../products";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  constructor() {}
  @Input() product;
  // share() {
  //   window.open("https://web.telegram.org/#/im?p=@Asyl6ek", "_blank");
  // }
  share(product: product): void {
    window.open(
      `https://telegram.me/share/url?url=${product.link}&text=${product.name}`,
      "_blank"
    );
  }

  ngOnInit() {}
}
