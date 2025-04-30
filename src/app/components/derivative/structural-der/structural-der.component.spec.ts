import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDerComponent } from './structural-der.component';

describe('StructuralDerComponent', () => {
  let component: StructuralDerComponent;
  let fixture: ComponentFixture<StructuralDerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
