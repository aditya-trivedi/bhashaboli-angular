import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { MyBootstrapModalComponent } from './modals/my-bootstrap-modal/my-bootstrap-modal.component';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bhasaboli-angular';
  newsData : any;
  lang : any;

  constructor(  
      private http: HttpClient,
      private modalService : NgbModal,
      private newService : NewsService
    ) {

      if (window.localStorage.getItem('bhashaboliCurrentLanguage')) {
        this.lang = window.localStorage.getItem('bhashaboliCurrentLanguage')
      } else {
        this.lang = 'english'
      }

      this.populateData()
  }

  populateData(){
    this.newService.getNewsPosts(this.lang).subscribe((data : any) => {
      this.newsData = data.record.posts ;
    });
  }

  
  openModal(post : any) {
    const modalRef = this.modalService.open(MyBootstrapModalComponent,{
      scrollable : true,
      centered : true,
      windowClass : 'modalWindow'
    });
    let data = post

    modalRef.componentInstance.newsData = data;
    modalRef.result.then((result) => {
      console.log(result);
      }, (reason) => {
    });
  }

  onLanguageChange(language : any){
    this.lang = language;
    window.localStorage.setItem('bhashaboliCurrentLanguage',language)
    this.populateData()
  }

}
