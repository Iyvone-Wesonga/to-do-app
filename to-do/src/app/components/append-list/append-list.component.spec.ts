import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendListComponent } from './append-list.component';

describe('AppendListComponent', () => {
  let component: AppendListComponent;
  let fixture: ComponentFixture<AppendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
