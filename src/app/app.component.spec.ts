import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'project1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('project1');
  });

  it('should have <p> with "Component works!"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const componentElement: HTMLElement = fixture.nativeElement;
    const p = componentElement.querySelector('p')!;
    expect(p.textContent).toEqual('Component works!');
  });

  it('should contain "Component works!"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const componentElement: HTMLElement = fixture.nativeElement;
    expect(componentElement.textContent).toContain('Component works!');
  });
});
