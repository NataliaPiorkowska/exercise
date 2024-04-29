import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionManagerComponent } from './action-manager.component';

describe('ActionManagerComponent', () => {
  let component: ActionManagerComponent;
  let fixture: ComponentFixture<ActionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
