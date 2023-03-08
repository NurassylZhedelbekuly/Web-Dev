import { Component } from '@angular/core';

import {Album} from "../models/album";
import {AlbumsService} from "./albums.service";

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
    albums: Album[];

    constructor(private albumsService: AlbumsService) {
        this.albums = [];
    }

    ngOnInit(): void {
        this.albumsService.getAlbums().subscribe(
            (response) => {
                this.albums = response.slice(0, 5);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    deleteAlbum(album: Album): void {
        const index = this.albums.indexOf(album);
        if (index !== -1) {
            this.albums.splice(index, 1);
        }
    }
}