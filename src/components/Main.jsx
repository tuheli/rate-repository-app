import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="/repositories" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/signIn" />} replace />
      </Routes>
    </View>
  );
};

export default Main;
