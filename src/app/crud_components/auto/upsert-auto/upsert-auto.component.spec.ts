import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertAutoComponent } from './upsert-auto.component';

describe('AddAutoComponent', () => {
  let component: UpsertAutoComponent;
  let fixture: ComponentFixture<UpsertAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
