import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = () => {
  const { data } = useQuery(ME, {
    fetchPolicy: 'no-cache',
  });

  const me = data ? data.me : { me: null };

  return me;
};

export default useMe;
