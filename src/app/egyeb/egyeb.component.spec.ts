import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyebComponent } from './egyeb.component';

describe('EgyebComponent', () => {
  let component: EgyebComponent;
  let fixture: ComponentFixture<EgyebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EgyebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EgyebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
