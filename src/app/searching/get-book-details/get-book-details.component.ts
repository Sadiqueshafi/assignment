import { Component, OnInit } from '@angular/core';
import { SearchigService } from '../searchig.service';

@Component({
  selector: 'app-get-book-details',
  templateUrl: './get-book-details.component.html',
  styleUrls: ['./get-book-details.component.css']
})
export class GetBookDetailsComponent implements OnInit {
  BookData:any;
  anotherdata:[]=[]
  constructor(private bookdata:SearchigService) { }

  ngOnInit(): void {
    this.bookdata.getData('/books/OL17910702M.json').subscribe(data=>{
      this.BookData =data;
      for(var i=0; i<data.description.length; i++){
        this.anotherdata =data.description[i];
        console.log(this.anotherdata)
      }
      console.log(this.bookdata)
      // this.BookData.forEach(data=>{
      //   this.BookData =data;
      //   console.log(this.bookdata)
      // })
      console.log( 'thisis '+ this.BookData);
    })
  }

}
