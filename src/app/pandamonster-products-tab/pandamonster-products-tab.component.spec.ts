import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandamonsterProductsTabComponent } from './pandamonster-products-tab.component';

describe('PandamonsterProductsTabComponent', () => {
  let component: PandamonsterProductsTabComponent;
  let fixture: ComponentFixture<PandamonsterProductsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandamonsterProductsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandamonsterProductsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
