import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Colors from './src/utils/colors';

export function Favourites({navigation, route}) {

  const [state, dispatch] = useReducer(reducer, intialState)











  
  const {breed} = route.params;
  const [image, setImage] = useState(breed.image);
  console.log('BREED', route.params)
  useEffect(() => {
    setImage(route.params?.breed?.image);
  }, [route.params]);
    console.log('BREEEEEEEDD', image.name)
  const loadData = async () => {
    // const image = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}`);
    const image = await axios.get(
      `https://api.thedogapi.com/v1/images/search`,
      {
        params: {
          breed_id: breed.id,
        },
      },
    );

    const data = image.data;
    const i = data[0];
    // const dog = data[4];
    setImage(i);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>FavoritesScreen</Text>
      <Image source={{uri: image?.url, width: 200, height: 200}} />
      <Text>{image.breed_group}</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Favourites;
//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
