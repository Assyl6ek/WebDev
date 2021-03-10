import { Injectable } from '@angular/core';
import { ALBUMS } from './fake-db';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http"
import {Album, Photo} from "./models";
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }
  getAlbums(): Observable<Album[]>
  {
      return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbum(routerParamsId: number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${routerParamsId}`);
  }
  deleteAlbum(id: number): Observable<any>{
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
  addAlbum(album: Album): Observable<Album> {
    // @ts-ignore
    return this.client.post(`https://jsonplaceholder.typicode.com/albums`, album);
  }
  getPostPhotos(id: number): Observable<Photo[]> {
    // @ts-ignore
    return this.client.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
