import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderColor: 'black',
    margin: 5,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  },
  errorTextInput: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderColor: 'red',
    margin: 5,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.errorTextInput : styles.textInput}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
