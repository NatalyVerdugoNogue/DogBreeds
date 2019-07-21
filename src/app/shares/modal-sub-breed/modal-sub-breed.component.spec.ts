import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubBreedComponent } from './modal-sub-breed.component';

describe('ModalSubBreedComponent', () => {
  let component: ModalSubBreedComponent;
  let fixture: ComponentFixture<ModalSubBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
