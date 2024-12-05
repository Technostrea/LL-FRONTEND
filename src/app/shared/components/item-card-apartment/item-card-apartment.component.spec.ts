import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardApartmentComponent } from './item-card-apartment.component';

describe('ItemCardApartmentComponent', () => {
  let component: ItemCardApartmentComponent;
  let fixture: ComponentFixture<ItemCardApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardApartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
