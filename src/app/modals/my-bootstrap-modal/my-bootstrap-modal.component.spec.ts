import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBootstrapModalComponent } from './my-bootstrap-modal.component';

describe('MyBootstrapModalComponent', () => {
  let component: MyBootstrapModalComponent;
  let fixture: ComponentFixture<MyBootstrapModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBootstrapModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBootstrapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
