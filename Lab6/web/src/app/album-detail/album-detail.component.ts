import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Album} from "../models/album";
import {AlbumsService} from "../albums/albums.service";

@Component({
    selector: 'app-album-detail',
    templateUrl: './album-detail.component.html',
    styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {

    album: Album;
    newTitle: string;

    constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
        this.album = {} as Album;
        this.newTitle = "";
    }

    goBack() {
        window.location.href = "http://localhost:4200/albums";
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
                        }
                    )
                }
            }
        );
    }

    saveTitle() {
        this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
            (response) => {
                this.album.title = response.title;
                this.newTitle = "";
            }
        )
    }
}