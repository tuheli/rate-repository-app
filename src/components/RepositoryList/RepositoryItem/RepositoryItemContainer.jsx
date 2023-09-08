import { useQuery } from '@apollo/client';
import RepositoryItem from '.';
import { GET_REPOSITORY } from '../../../graphql/queries';
import Text from '../../Text';
import { useParams } from 'react-router-native';

const RepositoryItemContainer = () => {
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

  console.log('item', item);

  if (!item) {
    return <Text>Loading item...</Text>;
  }

  return <RepositoryItem item={item} showFullView={true} />;
};

export default RepositoryItemContainer;
