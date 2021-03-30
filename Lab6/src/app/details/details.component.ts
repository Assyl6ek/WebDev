import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import {Album, Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Location} from "@angular/common";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  album!: Album;
  loaded!: boolean;
  constructor(private route: ActivatedRoute, private location: Location, private albumsService: AlbumsService) {

   }

  ngOnInit(): void {
    this.getAlbum();

  }
  getAlbum(){
    const routerParamsId = Number(this.route.snapshot.paramMap.get("id"));
    this.loaded = false;
    this.albumsService.getAlbum(routerParamsId).subscribe((album) => {
      this.album = album;
      this.loaded = true;

    });
  }
  goBack() {
    this.location.back();
  }
  updateAlbum(){
      this.albumsService.updateAlbum(this.album).subscribe((album) => {})
  }

}



