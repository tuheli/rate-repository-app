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

const RepositoryItemBottomHalf = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const representationFormat = (value) => {
    return value >= 1000 ? `${parseFloat((value / 1000).toFixed(1))}k` : value;
  };

  return (
    <View style={styles.container}>
      <RepositoryItemBottomText
        header="Stars"
        data={representationFormat(stargazersCount)}
      />
      <RepositoryItemBottomText
        header="Forks"
        data={representationFormat(forksCount)}
      />
      <RepositoryItemBottomText
        header="Reviews"
        data={representationFormat(reviewCount)}
      />
      <RepositoryItemBottomText header="Rating" data={ratingAverage} />
    </View>
  );
};

export default RepositoryItemBottomHalf;
