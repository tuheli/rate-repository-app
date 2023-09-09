import { FlatList } from 'react-native';

import RepositoryItem from '.';
import Text from '../../Text';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';
import useRepository from '../../../hooks/useRepository';

const SingleRepositoryItemContainer = () => {
  const { loading, data } = useRepository();

  const item = !loading && data ? data.repository : null;

  const reviewNodes =
    item && item.reviews ? item.reviews.edges.map((edge) => edge.node) : [];

  console.log('item', item);
  console.log('reviews', reviewNodes);

  if (!item) {
    return <Text>Loading item...</Text>;
  }

  return (
    <FlatList
      data={reviewNodes}
      ListHeaderComponent={<RepositoryItem item={item} showFullView={true} />}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default SingleRepositoryItemContainer;
