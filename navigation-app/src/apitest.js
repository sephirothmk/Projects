import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient)
export class API {
  heading = 'TestAPI';
  posts = [];
  posttest = "staticen test";
  url = 'http://localhost:62416/api/values';

  constructor(http) {
    this.http = http;
  }

  
  activate() {
   var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:62416/api/values",
  "method": "GET",
  "headers": {}
  };
  
  $.ajax(settings).done(function (response) {
   this.posts = response;
   console.log(this.posts);
   return this.posts;
   });
  }

  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}

