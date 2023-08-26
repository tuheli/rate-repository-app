import { View, StyleSheet } from 'react-native';
import RepositoryItemTopHalf from './RepositoryItemTopHalf';
import RepositoryItemBottomHalf from './RepositoryItemBottomHalf';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
  },
});

const RepositoryItem = ({ item }) => {
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
      <RepositoryItemTopHalf
        description={description}
        fullName={fullName}
        language={language}
        ownerAvatarUrl={ownerAvatarUrl}
      />
      <RepositoryItemBottomHalf
        forksCount={forksCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
        stargazersCount={stargazersCount}
      />
    </View>
  );
};

export default RepositoryItem;
