import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import axios from 'axios';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import { getAllBreeds } from '../../api/breeds';


export function HomeScreen({navigation}) {
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const [breeds, setBreeds] = useState();

  const loadData = async () => {
    // const breeds = await getAllBreeds();
    const breeds = await axios.get("https://api.thedogapi.com/v1/breeds");

    const data = breeds.data;
    const dog = data[4];
    setUrl(dog.image.url);
    setName(dog.name);
    setBreeds(data);
    console.log('WWWWWW', breeds.data)
  };
  const onBreedsPress = breed => {
    navigation.navigate('Favourites', {breed});
    console.log('FFFFFFF', breed);
  };

  useEffect(() => loadData(), []);

  const renderItem = ({item}) => {
    console.log('ITEM', item);
    return (
      <TouchableOpacity onPress={() => onBreedsPress(item)}>
        <View style={styles.block}>
          <Image source={{uri: item.image.url, width: 100, height: 100}} />
          <View style={styles.dogTextWrapper}>
            <Text style={styles.dogTitle}>{item.name}</Text>
            <Text style={styles.dogText}>{item.temperament}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
      }}>
      <Text>HomeScreen</Text>
      {/* <Button
      title="Go to Favorites"
      onPress={() => navigation.navigate('Favorites')}
    /> */}
      <FlatList data={breeds} renderItem={renderItem} />
      {/* <Button
      title="Load data"
      onPress={() => loadData()}
    /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  dogTextWrapper: {
    marginLeft: 10,
  },

  dogTitle: {
    width: 190,
    fontFamily: 'Cochin',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  dogText: {
    fontFamily: 'Cochin',
    fontSize: 16,
    width: 190,
  },

  block: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#ff8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
