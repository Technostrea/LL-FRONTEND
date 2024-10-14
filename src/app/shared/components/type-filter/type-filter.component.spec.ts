import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFilterComponent } from './type-filter.component';

describe('TypeFilterComponent', () => {
  let component: TypeFilterComponent;
  let fixture: ComponentFixture<TypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
