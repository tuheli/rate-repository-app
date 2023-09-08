import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const handleRepositoryClick = (item) => {
    console.log(`handleRepositoryClick for ${item.id}`);

    navigate(`/repositories/${item.id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleRepositoryClick(item)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;
