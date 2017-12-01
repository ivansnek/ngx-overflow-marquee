import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarqueeComponent } from './marquee.component';

describe('MarqueeComponent', function () {
  let de: DebugElement;
  let comp: MarqueeComponent;
  let fixture: ComponentFixture<MarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarqueeComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueeComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div.marquee'));
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a span tag', () => {
    fixture.detectChanges();
    expect(de.nativeElement).toContain(fixture.debugElement.query(By.css('span')));
  });
});
