import { Component } from '@angular/core';
import { HeadlineService } from 'src/services/headline.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private headLineService: HeadlineService) { }

  headlineData: any = [];
  category: string = 'Genel';

  ngOnInit() {
    this.headLineService.getHeadlines().subscribe(
      (data: any) => {
        this.headlineData = data;
        console.log(this.headlineData);
      },
      (error: any) => {
        console.log(error);
      }
    );;
  }

  getHeadlinesByCategory(category: string) {
    this.headLineService.getHeadlinesByCategory(category).subscribe(
      (data: any) => {
        this.headlineData = data;
        this.category = category;
        console.log(this.headlineData);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
