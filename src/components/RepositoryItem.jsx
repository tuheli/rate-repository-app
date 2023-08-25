import { View, StyleSheet } from 'react-native';
import RepositoryItemTopContainer from './RepositoryItemTopContainer';
import RepositoryItemBottomContainer from './RepositoryItemBottomContainer';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
  },
});

const RepositoryItem = ({ item }) => {
  console.log('repo item props', item);
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = item;
  return (
    <View style={styles.container}>
      <RepositoryItemTopContainer
        description={description}
        fullName={fullName}
        language={language}
        ownerAvatarUrl={ownerAvatarUrl}
      />
      <RepositoryItemBottomContainer
        forksCount={forksCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
        stargazersCount={stargazersCount}
      />
    </View>
  );
};

export default RepositoryItem;
