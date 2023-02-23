import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTituloComponent } from './intro-titulo.component';

describe('IntroTituloComponent', () => {
  let component: IntroTituloComponent;
  let fixture: ComponentFixture<IntroTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
