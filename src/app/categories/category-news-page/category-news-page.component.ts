import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadlineService } from 'src/services/headline.service';

@Component({
  selector: 'app-category-news-page',
  templateUrl: './category-news-page.component.html',
  styleUrls: ['./category-news-page.component.css']
})
export class CategoryNewsPageComponent {

  constructor(private headlineService:HeadlineService) { }

  headlineData: any = [];
  categoryName:string = '';
  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.categoryName = String(this.route.snapshot.paramMap.get('categoryName'));
    console.log(this.categoryName);
    this.headlineService.getHeadlinesByCategory(this.categoryName).subscribe(
      (data: any) => {
        this.headlineData = data;
        console.log(this.headlineData);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
