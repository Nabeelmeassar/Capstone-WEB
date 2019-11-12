import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
   isactive: 0;

  constructor(postsService: PostsService) {
    postsService.getPosts().subscribe(res => {
      this.posts = res;
      }, error => { });
  }
  handleClick($id) {
    this.isactive = $id;
  }
  ngOnInit() {
  }

}
