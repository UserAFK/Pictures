import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListImageModel } from "../Models/ListImageModel";
import { ImagePageModel } from "../Models/ImagePageModel";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private listOfImagesUrl: string = "https://boiling-refuge-66454.herokuapp.com/images";
  private imagePageUrl: string = "https://boiling-refuge-66454.herokuapp.com/images/";

  constructor(private http: HttpClient) { }

  public GetAllImages(): Observable<ListImageModel[]> {
    return this.http.get<ListImageModel[]>(this.listOfImagesUrl);
  }
  public GetImagePage(imageId:number): Observable<ImagePageModel> {
    return this.http.get<ImagePageModel>(this.imagePageUrl+imageId);
  }
}
