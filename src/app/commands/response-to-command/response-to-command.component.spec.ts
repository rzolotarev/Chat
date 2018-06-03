import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseToCommandComponent } from './response-to-command.component';

describe('ResponseToCommandComponent', () => {
  let component: ResponseToCommandComponent;
  let fixture: ComponentFixture<ResponseToCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseToCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseToCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
