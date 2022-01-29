import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }
  cats: string[] = ['Men Jackets', 'Women Jackets', 'Keivar Shirts', 'Leather accessories', 'Motorcycle Leathers', 'Brixton Collection']
  colors: any[] = ['Red', 'Black', 'Grey']
  choosedcolors: any[] = []
  fileToUpload: File = null;
  color: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
  desc: string;

  addData() {
    if (!this.name || !this.quantity || !this.price || !this.category || !this.choosedcolors || !this.imageURLS || !this.bannerimageURL || !this.desc) {
      alert('Fill out all fields inclufing images!!!')
    }
    else {
      alert('ALL OKEY')

      let prodData = {
        name: this.name,
        bannerImageURL: this.bannerimageURL,
        prodImageURLS: this.imageURLS,
        category: this.category,
        quantity: this.quantity,
        price: this.price,
        color: this.choosedcolors,
        timestamp: new Date(),
        description: this.desc
      }
      this.http.post('https://brixback.herokuapp.com/products/', prodData, { responseType: 'text' as 'json' }).subscribe((ret) => {
        alert(ret);

      }), (err => {
        alert(err);

      })
    }
  }

  oncolorchange(color) {

    this.choosedcolors.push(color.value)


  }

  selectcat(cat) {
    this.category = cat.value
  }

  remove(param) {
    this.choosedcolors.splice(param, 1)
  }

  bannerimageURL: string;


  imageURLS: string[] = []

  removeimg(param) {
    this.imageURLS.splice(param, 1)
  }

  selectedFiles: FileList;
  currentFile: File;
  msg;
  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'https://www.exportportal.site/uploadimage.php', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  imageURL: string;

  /////////select file/////////////////
  selectFile(event) {


    this.selectedFiles = event.target.files;

    this.bannerimageURL = 'https://www.exportportal.site/brixtonImages/' + this.selectedFiles[0].name
    this.upload()
  }

  attachimage(event) {


    this.selectedFiles = event.target.files;
    this.imageURL = 'https://www.exportportal.site/brixtonImages/' + this.selectedFiles[0].name
    setTimeout(() => {

      this.imageURLS.push(this.imageURL)

      this.upload()
    }, 2000);
  }


  /////////upload file/////////////////
  upload() {

    this.currentFile = this.selectedFiles.item(0);
    this.uploadFile(this.currentFile,).subscribe(response => {
      if (response instanceof HttpResponse) {
        alert(response.body);

      }
    });
    return;
  }


  ngOnInit(): void {
  }

}
