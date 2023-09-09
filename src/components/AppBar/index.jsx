import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import useSignOut from '../../hooks/useSignOut';

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
  scrollView: {
    backgroundColor: 'orange',
  },
});

const AppBar = ({ me }) => {
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab header="Repositories" linkTo="/repositories" />

        {me && <AppBarTab header="Create Review" linkTo="/createReview" />}

        {!me ? (
          <AppBarTab header="Sign In" linkTo="/signIn" />
        ) : (
          <AppBarTab header="Sign Out" linkTo="/signIn" onPress={signOut} />
        )}

        {!me && <AppBarTab header="Sign Up" linkTo="/signUp" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
