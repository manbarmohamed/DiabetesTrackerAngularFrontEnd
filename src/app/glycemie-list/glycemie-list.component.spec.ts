import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieListComponent } from './glycemie-list.component';

describe('GlycemieListComponent', () => {
  let component: GlycemieListComponent;
  let fixture: ComponentFixture<GlycemieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemieListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
