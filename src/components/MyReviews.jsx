import { FlatList } from 'react-native';
import { Pressable } from 'react-native';

import useMe from '../hooks/useMe';
import ItemSeparator from './RepositoryList/ItemSeparator';
import ReviewItem from './RepositoryList/RepositoryItem/ReviewItem';

const MyReviews = () => {
  const { reviews } = useMe(true);

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  console.log('review nodes', reviewNodes);

  const handleReviewClick = () => {
    console.log('handle my review click');
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleReviewClick()}>
          <ReviewItem review={item} />
        </Pressable>
      )}
    />
  );
};

export default MyReviews;
