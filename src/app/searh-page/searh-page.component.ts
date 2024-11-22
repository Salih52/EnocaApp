import { Component } from '@angular/core';
import { HeadlineService } from 'src/services/headline.service';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-searh-page',
  templateUrl: './searh-page.component.html',
  styleUrls: ['./searh-page.component.css']
})
export class SearhPageComponent {

  headlines: any = [];

  searchTerm: string = '';

  constructor(private h: HeadlineService , private search: SearchService) { }
  ngOnInit() {
    this.h.getHeadlines().subscribe(
      (data: any) => {
        this.headlines = data;
        console.log(this.headlines);
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.search.currentSearchTerm.subscribe(
      (term: string) => {
        this.searchTerm = term;
        console.log(this.searchTerm);
      }
    );
  }
}
