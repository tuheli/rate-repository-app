import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList/index';
import AppBar from './AppBar';
import SignIn from './SignIn';
import useMe from '../hooks/useMe';
import SingleRepositoryItemContainer from './RepositoryList/RepositoryItem/SingleRepositoryItemContainer';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const me = useMe();

  return (
    <View style={styles.container}>
      <AppBar me={me} />
      <Routes>
        <Route
          path="/repositories/:id"
          element={<SingleRepositoryItemContainer />}
          exact
        />
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="/repositories" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/signIn" />} replace />
      </Routes>
    </View>
  );
};

export default Main;
