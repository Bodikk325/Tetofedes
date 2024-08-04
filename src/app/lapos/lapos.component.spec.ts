import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaposComponent } from './lapos.component';

describe('LaposComponent', () => {
  let component: LaposComponent;
  let fixture: ComponentFixture<LaposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
