import { View, StyleSheet } from 'react-native';

import Text from '../../Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    margin: 8,
    flexDirection: 'row',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
  },
  rightSideContainer: {
    backgroundColor: 'yellow',
  },
  textStyle: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  console.log('review at review item', review);

  const formatDate = (dateString) => {
    if (!dateString) {
      console.log('Failed to format date');
      return null;
    }

    const dateSubString = dateString.split('T')[0];

    if (!dateSubString) {
      console.log('Failed to format date');
      return null;
    }

    return dateSubString;
  };

  console.log('format date function', formatDate(review.createdAt));

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text>{review.rating}</Text>
      </View>
      <View style={styles.rightSideContainer}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text>{formatDate(review.createdAt)}</Text>
        <Text style={styles.textStyle}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
