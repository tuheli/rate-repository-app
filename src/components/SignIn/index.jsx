import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

import SignInContainer from './SignInContainer';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  return <SignInContainer signIn={signIn} navigate={navigate} />;
};

export default SignIn;
