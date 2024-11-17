import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodototimerComponent } from './pomodototimer.component';

describe('PomodototimerComponent', () => {
  let component: PomodototimerComponent;
  let fixture: ComponentFixture<PomodototimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PomodototimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomodototimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
