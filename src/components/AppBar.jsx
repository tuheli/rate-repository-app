import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

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
      <AppBarTab header="Repositories" />
    </View>
  );
};

export default AppBar;
