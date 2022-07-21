import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImagePageModel } from '../Models/ImagePageModel';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {
  public image:ImagePageModel | any ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
    public dialogRef: MatDialogRef<ImagePageComponent>,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.GetImagePage(this.data).subscribe(
      result => {this.image = result;}
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
