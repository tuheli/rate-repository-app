import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  header: {
    fontWeight: 'bold',
  },
  text: {
    color: 'textSecondary',
  },
});

const RepositoryItemBottomText = ({ header, data }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight={styles.header.fontWeight}>{data}</Text>
      <Text color={styles.text.color}>{header}</Text>
    </View>
  );
};

export default RepositoryItemBottomText;
