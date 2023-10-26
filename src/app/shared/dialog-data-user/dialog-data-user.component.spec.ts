import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataUserComponent } from './dialog-data-user.component';

describe('DialogDataUserComponent', () => {
  let component: DialogDataUserComponent;
  let fixture: ComponentFixture<DialogDataUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDataUserComponent]
    });
    fixture = TestBed.createComponent(DialogDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
