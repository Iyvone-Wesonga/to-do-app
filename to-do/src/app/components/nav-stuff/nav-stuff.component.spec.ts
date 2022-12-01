import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStuffComponent } from './nav-stuff.component';

describe('NavStuffComponent', () => {
  let component: NavStuffComponent;
  let fixture: ComponentFixture<NavStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
