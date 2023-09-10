import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const setKeywordDelay = 500;

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');

  const { repositories } = useRepositories(
    orderBy,
    orderDirection,
    searchKeyword
  );

  const debouncedSetSearchKeyword = useDebouncedCallback((value) => {
    setSearchKeyword(value);
  }, setKeywordDelay);

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      setSearchKeyword={debouncedSetSearchKeyword}
    />
  );
};

export default RepositoryList;
