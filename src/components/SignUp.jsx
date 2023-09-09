import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    margin: 5,
    padding: 5,
  },
  submitButton: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 5,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  },
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(50).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  passwordConfirmation: yup
    .string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password Confirmation"
      />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text fontWeight="bold">Sign Up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const { signUp } = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp(username, password);
      await signIn({ username, password });
      navigate('/repositories');
    } catch (error) {
      console.log('Error at sign up', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
