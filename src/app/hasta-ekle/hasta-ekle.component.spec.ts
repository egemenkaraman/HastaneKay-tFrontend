import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaEkleComponent } from './hasta-ekle.component';

describe('HastaEkleComponent', () => {
  let component: HastaEkleComponent;
  let fixture: ComponentFixture<HastaEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HastaEkleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HastaEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
