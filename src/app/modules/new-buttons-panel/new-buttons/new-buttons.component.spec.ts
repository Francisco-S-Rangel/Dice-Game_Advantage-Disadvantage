import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewButtonsComponent } from './new-buttons.component';

describe('NewButtonsComponent', () => {
  let component: NewButtonsComponent;
  let fixture: ComponentFixture<NewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
