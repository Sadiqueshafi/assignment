import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchForTitleComponent } from './search-for-title/search-for-title.component';
import { GetBookDetailsComponent } from './get-book-details/get-book-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    SearchForTitleComponent,
    GetBookDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[
    SearchForTitleComponent,
    GetBookDetailsComponent
  ]
})
export class SearchingmoduleModule { }
