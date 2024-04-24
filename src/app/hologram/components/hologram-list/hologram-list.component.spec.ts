import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramListComponent } from './hologram-list.component';

describe('HologramListComponent', () => {
  let component: HologramListComponent;
  let fixture: ComponentFixture<HologramListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HologramListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HologramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
