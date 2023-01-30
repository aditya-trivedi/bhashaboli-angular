import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bhasaboli-angular';
  newsData : any;

  constructor(private http: HttpClient ) {
    this.getJSON().subscribe((data : any) => {
        this.newsData = data.posts ;
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get("../assets/english.json");
  }
  
  openModal(post : any){
    console.log(post)
    // this.modalService.open(post)
  }

}
