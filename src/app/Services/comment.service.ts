import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private postCommentToImageUrl: string = "https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments";

  constructor(private http: HttpClient) { }
}
