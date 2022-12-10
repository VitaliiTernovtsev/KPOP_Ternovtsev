import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('login is accessible', () => {
    expect(userData.login).toEqual('');
    userData.login='Vetal';
    expect(userData.login).toEqual('Vetal');
  });

  it('password is accessible', () => {
    expect(userData.password).toEqual('');
    userData.password='123123';
    expect(userData.password).toEqual('123123');
  });

  it('passwordRepeat is accessible', () => {
    expect(userData.passwordRepeat).toEqual('');
    userData.passwordRepeat='123123';
    expect(userData.passwordRepeat).toEqual('123123');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='a@a.com';
    expect(userData.email).toEqual('a@a.com');
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='0000000000';
    expect(userData.phone).toEqual('0000000000');
  });

  it('about is accessible', () => {
    expect(userData.about).toEqual('');
    userData.about='aaa';
    expect(userData.about).toEqual('aaa');
  });

  it('mail is accessible', () => {
    expect(userData.mail).toEqual('');
    userData.mail='aaa';
    expect(userData.mail).toEqual('aaa');
  });

});