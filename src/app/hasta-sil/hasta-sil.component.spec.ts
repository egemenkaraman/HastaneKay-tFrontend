import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaSilComponent } from './hasta-sil.component';

describe('HastaSilComponent', () => {
  let component: HastaSilComponent;
  let fixture: ComponentFixture<HastaSilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HastaSilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HastaSilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
