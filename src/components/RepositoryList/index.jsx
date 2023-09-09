import { useState } from 'react';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');

  const { repositories } = useRepositories(orderBy, orderDirection);

  console.log('repositories at repo list', repositories);

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
    />
  );
};

export default RepositoryList;
