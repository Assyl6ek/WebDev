import { Component, OnInit } from '@angular/core';
import {Album, Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Location} from "@angular/common";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private albumsService: AlbumsService) {
    this.photos = [];
   }
  photos: Photo[] = [];
  album!: any;
  loaded!: boolean;
  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(){
    const routerParamsId = Number(this.route.snapshot.paramMap.get("id"));
    this.loaded = false;
    this.albumsService.getAlbum(routerParamsId).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      this.Photos();
    });
  }

  goBack() {
    this.location.back();
  }
  Photos(){
    this.albumsService.getPostPhotos(this.album.id).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
