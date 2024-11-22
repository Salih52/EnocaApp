import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {

  apiURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9a8ec458bb9b4a9eb8195340d0a90417';

  constructor( private http: HttpClient) { }

  getHeadlines() {
    return this.http.get(this.apiURL).pipe(
      map((response: any) => response.articles.filter((article: any) => article.author !== null)),
      tap(filteredArticles => console.log('Filtered Articles:', filteredArticles))
    );
  }  

  getHeadlinesByCategory(category: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9a8ec458bb9b4a9eb8195340d0a90417`).pipe(
      map((response: any) => response.articles.filter((article: any) => article.author !== null)),
      tap(filteredArticles => console.log('Filtered Articles by Category:', filteredArticles))
    );
  }
}
