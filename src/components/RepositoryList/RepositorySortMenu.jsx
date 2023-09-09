import { Button, View } from 'react-native';
import { Menu } from 'react-native-paper';
import { useState } from 'react';

const RepositorySortMenu = ({ setOrderBy, setOrderDirection }) => {
  const [visible, setVisible] = useState(true);
  const [title, setTitle] = useState('Latest repositories');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        margin: 5,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu} title={title} />}
      >
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
