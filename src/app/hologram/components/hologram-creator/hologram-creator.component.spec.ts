import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramCreatorComponent } from './hologram-creator.component';

describe('HologramCreatorComponent', () => {
  let component: HologramCreatorComponent;
  let fixture: ComponentFixture<HologramCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HologramCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HologramCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
