import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { NewComment } from '../Models/NewComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private postCommentToImageUrl: string = "https://boiling-refuge-66454.herokuapp.com/images/";

  constructor(private http: HttpClient) { }

  public SendMessage(imageId: number, msg: NewComment): Observable<any> {
    return this.http.post<Observable<any>>(this.postCommentToImageUrl + imageId + "/comments", msg);
  }
}
