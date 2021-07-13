import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAppuiComponent } from './structure-appui.component';

describe('StructureAppuiComponent', () => {
  let component: StructureAppuiComponent;
  let fixture: ComponentFixture<StructureAppuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureAppuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureAppuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
