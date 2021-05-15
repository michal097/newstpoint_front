import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestUserComponent } from './oldest-user.component';

describe('OldestUserComponent', () => {
  let component: OldestUserComponent;
  let fixture: ComponentFixture<OldestUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
