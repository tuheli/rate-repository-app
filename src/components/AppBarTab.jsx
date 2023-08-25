import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: 'textTertiary',
    fontSize: 'subheading',
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 0,
    flexShrink: 1,
    margin: 3,
  },
});

const AppBarTab = ({ header }) => {
  return (
    <View style={styles.container}>
      <Text
        color={styles.text.color}
        fontSize={styles.text.fontSize}
        fontWeight={styles.text.fontWeight}
      >
        {header}
      </Text>
    </View>
  );
};

export default AppBarTab;
