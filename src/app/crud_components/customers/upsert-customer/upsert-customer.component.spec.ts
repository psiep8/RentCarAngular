import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertCustomerComponent } from './upsert-customer.component';

describe('AddComponent', () => {
  let component: UpsertCustomerComponent;
  let fixture: ComponentFixture<UpsertCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
