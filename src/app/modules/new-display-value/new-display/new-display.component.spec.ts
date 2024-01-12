import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDisplayComponent } from './new-display.component';

describe('NewDisplayComponent', () => {
  let component: NewDisplayComponent;
  let fixture: ComponentFixture<NewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
