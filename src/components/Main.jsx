import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList/index';
import AppBar from './AppBar';
import SignIn from './SignIn';
import useMe from '../hooks/useMe';
import SingleRepositoryItemContainer from './RepositoryList/RepositoryItem/SingleRepositoryItemContainer';
import CreateReview from './CreateReview';
import Text from './Text';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const me = useMe();

  console.log('me', me);

  return (
    <View style={styles.container}>
      <AppBar me={me} />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/createReview" element={<CreateReview />} exact />
        <Route
          path="/repositories/:id"
          element={<SingleRepositoryItemContainer />}
          exact
        />
        <Route
          path="/signIn"
          element={me ? <Text>Signed in as {me.username}</Text> : <SignIn />}
          exact
        />
        <Route path="/repositories" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/signIn" />} replace />
      </Routes>
    </View>
  );
};

export default Main;
