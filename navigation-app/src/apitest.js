import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient)
export class API {
  heading = 'TestAPI';
  posts = new Object;
  posttest = "staticen test";
  glupost;
  url = 'http://localhost:62416/api/values';

  constructor(http) {
    this.http = http;
  }


  activate() {
   var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:62416/api/languages/1/resources/1",
  "method": "GET",
  "headers": {}
  };
  
  $.ajax(settings).done(function (response) {
   this.posts = response;
   console.log(this.posts);
   this.glupost = this.posts.resourceName;
   console.log(this.glupost);
   return this.glupost;
   });
  }
  sayHello(){
    alert(API.glupost);
  }
  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}

