import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useNavigate } from 'react-router-native';

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

  const navigate = useNavigate();

  const debouncedSetSearchKeyword = useDebouncedCallback((value) => {
    setSearchKeyword(value);
  }, setKeywordDelay);

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      setSearchKeyword={debouncedSetSearchKeyword}
      navigate={navigate}
    />
  );
};

export default RepositoryList;
