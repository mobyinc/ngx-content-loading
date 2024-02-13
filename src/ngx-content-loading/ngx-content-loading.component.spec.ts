import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContentLoadingComponent } from './ngx-content-loading.component';

describe('NgxContentLoaderComponent', () => {
  let component: NgxContentLoadingComponent;
  let fixture: ComponentFixture<NgxContentLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxContentLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxContentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    cy.mount(NgxContentLoadingComponent)
    cy.get('svg').should('have.length', 1);
  });
});
