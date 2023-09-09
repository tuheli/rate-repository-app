import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
  const { id } = useParams();
  console.log('id at useRepository', id);

  const { loading, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: id,
    },
    onCompleted: () => console.log('Query completed: GET_REPOSITORY'),
    onError: (error) => console.log('Query error: GET_REPOSITORY', error),
  });

  console.log('data at useRepository', data);

  return {
    loading,
    data,
  };
};

export default useRepository;
