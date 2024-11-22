import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(news : any[] , searchTerm:string): any {
    searchTerm = searchTerm.toLowerCase();
    console.log(news);
    console.log(searchTerm);
    return news.filter((n:any) => n.title.toLowerCase().includes(searchTerm));
  }

}
