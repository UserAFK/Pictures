import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', component: ImagesComponent },
  // { path: 'images', component: ImagesComponent },
  // { path: 'images/:imageId', component: ImageComponent },  
  // { path: 'images/:imageId/comments', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
