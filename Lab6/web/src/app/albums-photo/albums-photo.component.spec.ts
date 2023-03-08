import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPhotoComponent } from './albums-photo.component';

describe('AlbumsPhotoComponent', () => {
    let component: AlbumsPhotoComponent;
    let fixture: ComponentFixture<AlbumsPhotoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AlbumsPhotoComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AlbumsPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});