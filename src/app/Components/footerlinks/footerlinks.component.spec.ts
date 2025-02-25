import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlinksComponent } from './footerlinks.component';

describe('FooterlinksComponent', () => {
  let component: FooterlinksComponent;
  let fixture: ComponentFixture<FooterlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterlinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
