import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AlbumsService} from "../albums/albums.service";
import {Album} from "../models/album";
import {Photos} from "../models/photos";

@Component({
    selector: 'app-albums-photo',
    templateUrl: './albums-photo.component.html',
    styleUrls: ['./albums-photo.component.css']
})
export class AlbumsPhotoComponent {
    album: Album;
    photos: Photos[];

    constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
        this.album = {} as Album;
        this.photos = [{}] as Photos[];
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (params) => {
                let _id = params.get('id');
                if (_id) {
                    let id = +_id;
                    this.albumService.getAlbum(id).subscribe(
                        (response) => {
                            this.album = response;
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
                    this.albumService.getPhotos(id).subscribe(
                        (response) => {
                            this.photos = response.slice(0, 6);
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
                }
            }
        );
    }

    goBack() {
        window.location.href = `http://localhost:4200/albums/${this.album.id}`;
    }
}
