import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GirlPage } from './girl.page';

describe('GirlPage', () => {
  let component: GirlPage;
  let fixture: ComponentFixture<GirlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
