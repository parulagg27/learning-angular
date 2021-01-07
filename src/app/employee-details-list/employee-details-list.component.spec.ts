import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsListComponent } from './employee-details-list.component';

describe('EmployeeDetailsListComponent', () => {
  let component: EmployeeDetailsListComponent;
  let fixture: ComponentFixture<EmployeeDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
