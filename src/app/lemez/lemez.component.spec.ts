import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemezComponent } from './lemez.component';

describe('LemezComponent', () => {
  let component: LemezComponent;
  let fixture: ComponentFixture<LemezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LemezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LemezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
