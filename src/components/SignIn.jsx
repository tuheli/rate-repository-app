import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    margin: 5,
    padding: 5,
  },
  signInButton: {
    backgroundColor: 'grey',
    justifyContent: 'center',
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
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
    } catch (error) {
      // Note: The server only throws error, it doesnt return any response so there are no actual logs in the front
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
