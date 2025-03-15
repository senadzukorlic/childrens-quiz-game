import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesHeaderComponent } from './games-header.component';

describe('GamesHeaderComponent', () => {
  let component: GamesHeaderComponent;
  let fixture: ComponentFixture<GamesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
