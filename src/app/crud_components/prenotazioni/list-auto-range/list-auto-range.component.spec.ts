import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutoRangeComponent } from './list-auto-range.component';

describe('ListAutoRangeComponent', () => {
  let component: ListAutoRangeComponent;
  let fixture: ComponentFixture<ListAutoRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutoRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAutoRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
