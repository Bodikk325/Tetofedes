import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsindelyComponent } from './zsindely.component';

describe('ZsindelyComponent', () => {
  let component: ZsindelyComponent;
  let fixture: ComponentFixture<ZsindelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZsindelyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZsindelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
