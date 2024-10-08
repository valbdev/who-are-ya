import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreYaComponent } from './who-are-ya.component';

describe('WhoAreYaComponent', () => {
  let component: WhoAreYaComponent;
  let fixture: ComponentFixture<WhoAreYaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoAreYaComponent]
    });
    fixture = TestBed.createComponent(WhoAreYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
