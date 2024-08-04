import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CserepComponent } from './cserep.component';

describe('CserepComponent', () => {
  let component: CserepComponent;
  let fixture: ComponentFixture<CserepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CserepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CserepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
