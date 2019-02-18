import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfacturerComponent } from './manfacturer.component';

describe('ManfacturerComponent', () => {
  let component: ManfacturerComponent;
  let fixture: ComponentFixture<ManfacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManfacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManfacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
