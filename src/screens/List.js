import React from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import Center from '../components/Center';
const items = ['car', 'motorcycle', 'cookies', 'laptop', 'keyboard'];
const List = () => {
  return (
    <Center>
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <TouchableOpacity style={{flex: 1, margin: 20}}>
            <Text style={{fontSize: 30}}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </Center>
  );
};

export default List;
