import { Component, OnInit } from "@angular/core";
import {categories} from "../products";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent {
  categories = categories;
}
