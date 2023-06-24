import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerFormComponent } from './player-form.component';

describe('PlayerFormComponent', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;

  beforeEach(async () => {
    // Configure testing module
    await TestBed.configureTestingModule({
      declarations: [PlayerFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    // Create component fixture
    fixture = TestBed.createComponent(PlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PlayerFormComponent', () => {
    // Expect the component to be created
    expect(component).toBeTruthy();
  });
});
