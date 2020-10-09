import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContactsChannelsComponent } from './menu-contacts-channels.component';

describe('MenuContactsChannelsComponent', () => {
  let component: MenuContactsChannelsComponent;
  let fixture: ComponentFixture<MenuContactsChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContactsChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContactsChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
