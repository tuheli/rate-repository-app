import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, color, fontSize, fontWeight, error, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textTertiary' && styles.colorTextTertiary,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeTextInput style={textStyle} {...props} />;
};

export default TextInput;
