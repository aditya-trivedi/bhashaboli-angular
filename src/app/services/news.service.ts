
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseURL = 'https://api.jsonbin.io/v3'
  constructor(
    private http : HttpClient
  ) { }

  headers = {
    'X-Master-Key': '$2b$10$2XrMLnzYR8zsEeay9oZTNO.y1kO27J.juNNKd8OyKhkGOiJj17fLW'
  }



  getNewsPosts( currentLanguage : any){
    return this.http.get( this.baseURL + '/b/63d93b06ebd26539d071353b' , { headers : this.headers })
  } 
}
