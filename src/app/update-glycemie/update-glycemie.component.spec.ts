import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGlycemieComponent } from './update-glycemie.component';

describe('UpdateGlycemieComponent', () => {
  let component: UpdateGlycemieComponent;
  let fixture: ComponentFixture<UpdateGlycemieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGlycemieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGlycemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
