import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverpasComponent } from './recoverpas.component';

describe('RecoverpasComponent', () => {
  let component: RecoverpasComponent;
  let fixture: ComponentFixture<RecoverpasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverpasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
