import { Component } from '@angular/core';
import { HeadlineService } from 'src/services/headline.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private h: HeadlineService) { }
  headlines:any = []; // API'den gelen veriler
  paginatedHeadlines = [];
  currentPage = 0;
  itemsPerPage = 6;
  totalPages = 0;

  ngOnInit() {
    this.h.getHeadlines().subscribe(
      (data: any) => {
        this.headlines = data;
        this.totalPages = Math.ceil(this.headlines.length / this.itemsPerPage);
        this.updatePaginatedHeadlines();
        console.log(this.headlines);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updatePaginatedHeadlines() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedHeadlines = this.headlines.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePaginatedHeadlines();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedHeadlines();
    }
  }


  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedHeadlines();
  }
}
