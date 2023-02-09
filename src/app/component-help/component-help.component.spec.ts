import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHelpComponent } from './component-help.component';

describe('ComponentHelpComponent', () => {
  let component: ComponentHelpComponent;
  let fixture: ComponentFixture<ComponentHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
