import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMinimalDetailComponent } from './card-minimal-detail.component';

describe('CardMinimalDetailComponent', () => {
  let component: CardMinimalDetailComponent;
  let fixture: ComponentFixture<CardMinimalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMinimalDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMinimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
