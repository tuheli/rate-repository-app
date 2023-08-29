import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from '../Text';

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
    marginRight: 15,
    backgroundColor: 'pink',
  },
});

const AppBarTab = ({ header, linkTo }) => {
  return (
    <Pressable onPress={() => console.log(`app bar tab ${header} was pressed`)}>
      <View style={styles.container}>
        <Link to={linkTo}>
          <Text
            color={styles.text.color}
            fontSize={styles.text.fontSize}
            fontWeight={styles.text.fontWeight}
          >
            {header}
          </Text>
        </Link>
      </View>
    </Pressable>
  );
};

export default AppBarTab;
