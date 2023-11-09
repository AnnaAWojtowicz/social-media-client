import { login } from '../js/api/auth/login.js';
import { logout } from '../js/api/auth/logout.js';

/*
https://kharpreet9.medium.com/how-to-test-if-a-function-is-called-in-a-component-using-jest-4e0d0bfbd186
https://stackoverflow.com/a/47897345
https://robertmarshall.dev/blog/arrange-act-and-assert-pattern-the-three-as-of-unit-testing/
*/

describe('login & logout', () => {
  it('sets token in local storage', async () => {
    //Arrange
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };

    const mockFetchSuccess = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        email: 'example@noroff.no',
        accessToken: '1234',
      }),
    });
    global.fetch = mockFetchSuccess;

    //Act
    const profile = await login('example@noroff.no', 'password1234');

    //Assert
    expect(profile.email).toContain('example@noroff.no');
    expect(global.localStorage.setItem).toHaveBeenCalled();
    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify('1234'),
    );
  });

  it('remove token from local storage', () => {
    //Arrange
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
      removeItem: jest.fn(),
    };

    //Act
    logout();

    //Assert
    expect(global.localStorage.removeItem).toHaveBeenCalled();
    expect(global.localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(global.localStorage.removeItem).toHaveBeenCalledWith('profile');
  });
});
