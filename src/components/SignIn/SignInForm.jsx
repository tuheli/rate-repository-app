import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

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

export default SignInForm;
