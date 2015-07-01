import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient)
export class API {
  heading = 'TestAPI';
  posts = [];
  post = "staticen test";
  url = 'http://localhost:62416/api/values';

  constructor(http) {
    this.http = http;
  }
  loadPosts() {
   // return 2;
   this.posts = this.http.jsonp(this.url, "jsonp").content;
   return this.posts;
  }
  activate() {
    console.log("bla");
    return this.loadPosts();

  }

  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}

