import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcommentsComponent } from './blogcomments.component';

describe('BlogcommentsComponent', () => {
  let component: BlogcommentsComponent;
  let fixture: ComponentFixture<BlogcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
