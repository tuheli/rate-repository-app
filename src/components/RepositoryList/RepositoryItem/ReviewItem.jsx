import { View, StyleSheet, Button } from 'react-native';
import { useNavigate } from 'react-router-native';

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
  buttonContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    backgroundColor: 'blue',
    margin: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    margin: 5,
  },
});

const ReviewItem = ({
  review,
  titleAsUsername = true,
  showButtons = false,
  handleDeleteClick = null,
}) => {
  const navigate = useNavigate();

  console.log('review at review item', review);
  console.log('showing review buttons', showButtons);

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
    <>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text>{review.rating}</Text>
        </View>
        <View style={styles.rightSideContainer}>
          {titleAsUsername ? (
            <Text fontWeight="bold">{review.user.username}</Text>
          ) : (
            <Text fontWeight="bold">{review.repository.name}</Text>
          )}
          <Text>{formatDate(review.createdAt)}</Text>
          <Text style={styles.textStyle}>{review.text}</Text>
        </View>
      </View>
      {showButtons && (
        <View style={styles.buttonContainer}>
          <View style={styles.viewButton}>
            <Button
              title="View Repository"
              onPress={() => navigate(`/repositories/${review.repository.id}`)}
            />
          </View>
          <View style={styles.deleteButton}>
            <Button
              title="Delete Repository"
              onPress={() => handleDeleteClick(review.id)}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ReviewItem;
