import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeWorkComponent } from './creative-work.component';

describe('CreativeWorkComponent', () => {
  let component: CreativeWorkComponent;
  let fixture: ComponentFixture<CreativeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreativeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
