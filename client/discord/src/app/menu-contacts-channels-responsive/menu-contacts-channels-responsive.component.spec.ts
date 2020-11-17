import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContactsChannelsResponsiveComponent } from './menu-contacts-channels-responsive.component';

describe('MenuContactsChannelsResponsiveComponent', () => {
  let component: MenuContactsChannelsResponsiveComponent;
  let fixture: ComponentFixture<MenuContactsChannelsResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContactsChannelsResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContactsChannelsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
