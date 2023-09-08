import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';

import { GET_REPOSITORY } from '../../../graphql/queries';
import RepositoryItem from '.';
import Text from '../../Text';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';

const SingleRepositoryItemContainer = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: {
      id: id,
    },
    onCompleted: () => console.log('Query completed: GET_REPOSITORY'),
    onError: (error) => console.log('Query error: GET_REPOSITORY', error),
  });

  console.log('id form params', id);

  console.log('data', data);

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
