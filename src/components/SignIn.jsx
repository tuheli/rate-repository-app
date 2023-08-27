import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    margin: 5,
    padding: 5,
  },
  inputContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5,
  },
  signInButton: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => console.log('submit sign in form', values);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
