import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import SignInContainer from '../components/SignIn/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const mockSignIn = jest.fn();
      const mockNavigate = jest.fn();

      render(<SignInContainer signIn={mockSignIn} navigate={mockNavigate} />);

      screen.debug();

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');

      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');

      await waitFor(() => {
        fireEvent.press(screen.getByText('Sign In'));
      });

      // Has the sign in function been called once?

      expect(mockSignIn).toHaveBeenCalledTimes(1);

      // Was the function called with correct arguments?

      expect(mockSignIn.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});
