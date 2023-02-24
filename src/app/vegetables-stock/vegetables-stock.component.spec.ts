import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesStockComponent } from './vegetables-stock.component';

describe('VegetablesStockComponent', () => {
  let component: VegetablesStockComponent;
  let fixture: ComponentFixture<VegetablesStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetablesStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetablesStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
