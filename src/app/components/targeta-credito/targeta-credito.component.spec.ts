import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaCreditoComponent } from './targeta-credito.component';

describe('TargetaCreditoComponent', () => {
  let component: TargetaCreditoComponent;
  let fixture: ComponentFixture<TargetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetaCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
