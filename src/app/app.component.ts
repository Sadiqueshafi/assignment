import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentofGrid';
  showImage:boolean = false;
  show:any;
  arrayOfImage:any[] = [
   {url:'assets/sportitems.jpg'},{url:'assets/xcvx.jpg'},{url:'assets/casualshoses.jpg'}, {url:'assets/back.jpg'},{url:'assets/sunglass.jpg'},{url:'assets/,kj.jpg'}];
  abc(getImage: any){
    this.showImage=true;
    this.show=getImage;
    console.log(getImage);
    // addItem(index) {
      // var currentElement = this.arrayOfImage[getImage];
      // this.arrayOfImage.splice(getImage, 0, currentElement);
    // }
  }

}
