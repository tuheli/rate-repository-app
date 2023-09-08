import { View, StyleSheet, Button } from 'react-native';
import * as Linking from 'expo-linking';

import RepositoryItemTopHalf from './RepositoryItemTopHalf';
import RepositoryItemBottomHalf from './RepositoryItemBottomHalf';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'pink',
  },
});

const RepositoryItem = ({ item, showFullView = false }) => {
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
    <View style={styles.container} testID="repositoryItem">
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
      {showFullView && (
        <View style={styles.button}>
          <Button
            title="Open in Github"
            onPress={() => Linking.openURL(item.url)}
          />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
