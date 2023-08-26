import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 10,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: '#24292e',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab header="Repositories" linkTo="/repositories" />
      <AppBarTab header="Sign In" linkTo="/signIn" />
    </View>
  );
};

export default AppBar;
