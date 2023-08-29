import { View, Image, StyleSheet } from 'react-native';
import Text from '../../Text';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  imageContainer: {
    backgroundColor: 'yellow',
    margin: 3,
  },
  dataContainer: {
    backgroundColor: 'purple',
    flexShrink: 1,
    margin: 3,
  },
  languageContainer: {
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 'subheading',
  },
  text: {
    color: {
      textSecondary: 'textSecondary',
      textTertiary: 'textTertiary',
    },
  },
});

const RepositoryItemTopHalf = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={styles.dataContainer}>
        <Text
          fontWeight={styles.textHeader.fontWeight}
          fontSize={styles.textHeader.fontSize}
        >
          {fullName}
        </Text>
        <Text color={styles.text.color.textSecondary}>{description}</Text>
        <View style={styles.languageContainer}>
          <Text color={styles.text.color.textTertiary}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemTopHalf;
