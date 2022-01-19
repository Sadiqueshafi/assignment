import { Component, OnInit } from '@angular/core';
import { SearchigService } from '../searchig.service';

@Component({
  selector: 'app-search-for-title',
  templateUrl: './search-for-title.component.html',
  styleUrls: ['./search-for-title.component.css']
})
export class SearchForTitleComponent implements OnInit {
  ReceivingData:any[]=[];
  title:any;
  newRecivingData:any[]=[];
  p: number = 1;
  public totalLength:any;
  constructor(private searchingTitle:SearchigService) { }
  ngOnInit(): void {
    this.SearchTitle();
  }
  search(){
    // if(this.title == ''){
    //   this.ngOnInit;
    // }else{
    //   this.ReceivingData = [...this.newRecivingData.filter(res=>{ res.includes(this.title)
        // console.log(res)
        // console.log(res);
        // return res.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
        // console.log(this.ReceivingData)
      // })]
    // }
  }
  //   if (searchTerm) {
  //     this.searchingTitle.SearcTitle(searchTerm).subscribe(data=>{
  //       console.log(data)
  //       this.ReceivingData = data;
  //     })
  //   }
  // }
  SearchTitle(){
    this.searchingTitle.getData('/search.json?q=search').subscribe(data=>{
      this.ReceivingData = data.docs;
      this.newRecivingData =data.docs;
      console.log(this.ReceivingData);
    })
  }
}
