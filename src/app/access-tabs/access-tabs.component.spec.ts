import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessTabsComponent } from './access-tabs.component';

describe('AccessTabsComponent', () => {
  let component: AccessTabsComponent;
  let fixture: ComponentFixture<AccessTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
