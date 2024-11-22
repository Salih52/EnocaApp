import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService, private router: Router) { }

  onSearchTermChange() {
    this.searchService.changeSearchTerm(this.searchTerm);
  }
}
