import { View, StyleSheet } from 'react-native';
import RepositoryItemBottomText from './RepositoryItemBottomText';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 'subheading',
  },
});

const RepositoryItemBottomContainer = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.container}>
      <RepositoryItemBottomText header="Stars" data={stargazersCount} />
      <RepositoryItemBottomText header="Forks" data={forksCount} />
      <RepositoryItemBottomText header="Reviews" data={reviewCount} />
      <RepositoryItemBottomText header="Reviews" data={reviewCount} />
      <RepositoryItemBottomText header="Rating" data={ratingAverage} />
    </View>
  );
};

export default RepositoryItemBottomContainer;
