import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (includeReviews = false) => {
  const { data } = useQuery(ME, {
    fetchPolicy: 'no-cache',
    variables: {
      includeReviews,
    },
  });

  const me = data ? data.me : { me: null };

  return me;
};

export default useMe;
