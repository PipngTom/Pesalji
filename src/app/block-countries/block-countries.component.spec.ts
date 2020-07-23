import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCountriesComponent } from './block-countries.component';

describe('BlockCountriesComponent', () => {
  let component: BlockCountriesComponent;
  let fixture: ComponentFixture<BlockCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
