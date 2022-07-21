import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImagePageModel } from '../Models/ImagePageModel';
import { NewComment } from '../Models/NewComment';
import { CommentService } from '../Services/comment.service';
import { ImageService } from '../Services/image.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {
  public image:ImagePageModel | any ;  
  public newComment = {} as NewComment;
  public name:string = "";
  public comment:string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
    public dialogRef: MatDialogRef<ImagePageComponent>,
    private imageService: ImageService,
    private commentService: CommentService) { }

  ngOnInit(): void {
    this.GetImageById();
  }
  private GetImageById() {
    this.imageService.GetImagePage(this.data).subscribe(
      result => { this.image = result; }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
  sendMessage() {    
    this.createNewMessage();
    this.commentService.SendMessage(this.image.id,this.newComment).subscribe(
      result => {
        console.log(this.newComment.comment+", "+ result);
    }
    );
    
  }


  private createNewMessage() {
    this.newComment.name = this.name;
    this.newComment.comment = this.comment;
  }
}
