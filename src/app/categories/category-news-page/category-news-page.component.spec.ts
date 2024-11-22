import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNewsPageComponent } from './category-news-page.component';

describe('CategoryNewsPageComponent', () => {
  let component: CategoryNewsPageComponent;
  let fixture: ComponentFixture<CategoryNewsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryNewsPageComponent]
    });
    fixture = TestBed.createComponent(CategoryNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
