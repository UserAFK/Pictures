import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { ListImageModel } from "../Models/ListImageModel";
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ImagePageComponent } from '../image-page/image-page.component';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public allImages: ListImageModel[] = [];

  constructor(
    private imageService: ImageService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.imageService.GetAllImages().subscribe(
      result => this.allImages = result
    );
  }

  public OpenInfo(imageId:number): void {
    let dialogRef = this.matDialog.open(ImagePageComponent, {
      "width": '600px',
      "maxHeight": '90vh',
      "data": imageId,
      "autoFocus": false
    });
  }

}
