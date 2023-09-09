import { useState } from 'react';
import { Button } from 'react-native';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');

  const { repositories } = useRepositories(orderBy, orderDirection);

  console.log('repositories at repo list', repositories);

  return (
    <>
      <Button
        title="Order by rating"
        onPress={() => setOrderBy('RATING_AVERAGE')}
      />
      <Button
        title="Order by created at"
        onPress={() => setOrderBy('CREATED_AT')}
      />
      <Button
        title="Order direction desc"
        onPress={() => setOrderDirection('DESC')}
      />
      <Button
        title="Order direction asc"
        onPress={() => setOrderDirection('ASC')}
      />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;
