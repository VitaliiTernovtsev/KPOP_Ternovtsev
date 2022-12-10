import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lab_7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab_7');
  });

  it(`check empty login`, () => {
    component.userData.login = "";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#loginErr').textContent;
    expect(elementText).toBe('Заповніть поле');
  });

  it(`check empty password`, () => {
    component.userData.password = "";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordErr').textContent;
    expect(elementText).toBe('Заповніть поле');
  });

  it(`check nonviable password`, () => {
    component.userData.password = "aaa";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check password equality`, () => {
    component.userData.passwordRepeat="1234567S";
    component.userData.password="1234567F";    
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordErr').textContent;
    expect(elementText).toBe('Поля мають співпадати');
  });

  it(`check empty passwordRepeat`, () => {
    component.userData.passwordRepeat = "";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordRepeatErr').textContent;
    expect(elementText).toBe('Заповніть поле');
  });

  it(`check nonviable passwordRepeat`, () => {
    component.userData.passwordRepeat = "aaa";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordRepeatErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check passwordRepeat equality`, () => {
    component.userData.passwordRepeat="1234567S";
    component.userData.password="1234567F";    
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordRepeatErr').textContent;
    expect(elementText).toBe('Поля мають співпадати');
  });

  it(`check empty email`, () => {
    component.userData.email = "";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Заповніть поле');
  });

  it(`check nonviable email`, () => {
    component.userData.email = "aaa";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check empty about`, () => {
    component.userData.about = "";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#aboutErr').textContent;
    expect(elementText).toBe('Заповніть поле');
  });
})