import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  // @ts-ignore
  getPosts = (): observable<any> => this.http.get('https://jsonplaceholder.typicode.com/posts');
}
