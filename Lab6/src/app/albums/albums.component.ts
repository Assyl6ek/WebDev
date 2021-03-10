import { Component, Inject, OnInit } from '@angular/core';
import {Album} from '../models';
import {ALBUMS} from "../fake-db";
import {AlbumsService} from "../albums.service";
import { Observable } from 'rxjs';
import {Location} from "@angular/common";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  constructor(@Inject(AlbumsService) service: AlbumsService, private albumsService: AlbumsService, private location: Location) {
    this.newAlbum = '';
  }
  albums: Album[] = [];
  loaded!: boolean;
  newAlbum!: string;
  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {

    });
  }
  goBack() {
    this.location.back();
  }
  addAlbum(){
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }
}
