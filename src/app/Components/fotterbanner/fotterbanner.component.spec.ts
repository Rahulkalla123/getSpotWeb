import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotterbannerComponent } from './fotterbanner.component';

describe('FotterbannerComponent', () => {
  let component: FotterbannerComponent;
  let fixture: ComponentFixture<FotterbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotterbannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotterbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
