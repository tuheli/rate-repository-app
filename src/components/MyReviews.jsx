import { FlatList } from 'react-native';
import { Pressable } from 'react-native';
import { useMutation } from '@apollo/client';

import useMe from '../hooks/useMe';
import ItemSeparator from './RepositoryList/ItemSeparator';
import ReviewItem from './RepositoryList/RepositoryItem/ReviewItem';
import { DELETE_REVIEW } from '../graphql/mutations';

const MyReviews = () => {
  const [me, refetch] = useMe(true);
  const [mutate] = useMutation(DELETE_REVIEW);

  const reviewNodes =
    me && me.reviews ? me.reviews.edges.map((edge) => edge.node) : [];

  console.log('review nodes', reviewNodes);

  const handleReviewClick = () => {
    console.log('handle my review click');
  };

  const handleDeleteClick = async (reviewId) => {
    console.log('at handle delete review for', reviewId);

    const { data } = await mutate({
      variables: {
        deleteReviewId: reviewId,
      },
    });

    refetch();

    console.log('review delete ok?', data);
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleReviewClick()}>
          <ReviewItem
            review={item}
            showButtons={true}
            titleAsUsername={false}
            handleDeleteClick={handleDeleteClick}
          />
        </Pressable>
      )}
    />
  );
};

export default MyReviews;
