import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryNewsPageComponent } from './categories/category-news-page/category-news-page.component';
import { SearhPageComponent } from './searh-page/searh-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about' , component: AboutMeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:categoryName', component: CategoryNewsPageComponent},
  {path: 'search' , component: SearhPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
