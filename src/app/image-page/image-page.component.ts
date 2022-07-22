import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagePageModel } from '../Models/ImagePageModel';
import { NewComment } from '../Models/NewComment';
import { CommentService } from '../Services/comment.service';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {
  public image: ImagePageModel | any;
  public name: string = "";
  public comment: string = "";

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
    if (!this.canSend()) {
      window.alert("Please enter your name and message");
      return;
    }
    let message = this.createNewMessage();
    this.commentService.SendMessage(this.image.id, message).subscribe(
      result => {
        console.log("message '" + message.comment + "' sent. result:" + result);
      }
    );
  }

  private createNewMessage(): NewComment {
    let comment = {} as NewComment;
    comment.name = this.name;
    comment.comment = this.comment;
    return comment;
  }

  public isInputInvalid(input: string): boolean {
    return input.length < 1;
  }

  private canSend(): boolean {
    return !this.isInputInvalid(this.comment) && !this.isInputInvalid(this.name);
  }
}
