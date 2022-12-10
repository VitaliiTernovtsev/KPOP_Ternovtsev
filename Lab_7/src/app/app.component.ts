import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Lab_7';
  public userData: UserRequest = new UserRequest();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  loginErr = '';
  passwordErr = '';
  passwordRepeatErr = '';
  emailErr = '';
  phoneErr = '';
  aboutErr = '';
  mailErr = '';

  checkData() {
    this.loginErr = '';
    this.passwordErr = '';
    this.passwordRepeatErr = '';
    this.emailErr = '';
    this.aboutErr = '';
    this.phoneErr = '';
    let sw = true;

    if (this.userData.email === '') {
      this.emailErr = "Заповніть поле";
      sw = false;
    }
    else if (!this.emailRegex.test(this.userData.email)) {
      this.emailErr = "Помилка";
      sw = false;
    }

    if (this.userData.password === '') {
      this.passwordErr = "Заповніть поле";
      sw = false;
    }
    else if (!this.passwordRegex.test(this.userData.password)) {
      this.passwordErr = "Помилка";
      sw = false;
    }
    else if (this.userData.passwordRepeat != this.userData.password) {
      this.passwordErr = "Поля мають співпадати";
      sw = false;
    }

    if (this.userData.passwordRepeat === '') {
      this.passwordRepeatErr = "Заповніть поле";
      sw = false;
    }
    else if (!this.passwordRegex.test(this.userData.passwordRepeat)) {
      this.passwordRepeatErr = "Помилка";
      sw = false;
    } 
    else if (this.userData.passwordRepeat != this.userData.password) {
      this.passwordRepeatErr = "Поля мають співпадати";
      sw = false;
    }

    if (!this.phoneRegex.test(this.userData.phone)) {
      this.phoneErr = "Помилка";
      sw = false;
    }

    if (this.userData.about === '') {
      this.aboutErr = "Заповніть поле";
      sw = false;
    }

    if (this.userData.login === '') {
      this.loginErr = "Заповніть поле";
      sw = false;
    }

    if (sw) {
      this.userData = new UserRequest();
      alert("Ваші дані успішно злиті у вільний доступ!");
    }
  }
}