import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColletctTheWordsComponent } from './colletct-the-words.component';

describe('ColletctTheWordsComponent', () => {
  let component: ColletctTheWordsComponent;
  let fixture: ComponentFixture<ColletctTheWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColletctTheWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColletctTheWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
