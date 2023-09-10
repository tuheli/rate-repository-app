import { Button, StyleSheet, View } from 'react-native';
import { Menu, Searchbar } from 'react-native-paper';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  searchBar: {
    borderRadius: 10,
  },
});

const RepositorySortMenu = ({
  setOrderBy,
  setOrderDirection,
  setSearchKeyword,
}) => {
  const [visible, setVisible] = useState(true);
  const [title, setTitle] = useState('Latest repositories');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search keyword..."
        iconColor="grey"
        fontSize={20}
        onChangeText={(value) => setSearchKeyword(value)}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu} title={title} />}
      >
        <Menu.Item title="Select an item..." />
        <Menu.Item
          onPress={() => {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
            setTitle('Latest repositories');
            closeMenu();
          }}
          title="Latest repositories"
        />
        <Menu.Item
          onPress={() => {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
            setTitle('Highest rated repositories');
            closeMenu();
          }}
          title="Highest rated repositories"
        />
        <Menu.Item
          onPress={() => {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
            setTitle('Lowest rated repositories');
            closeMenu();
          }}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

export default RepositorySortMenu;
