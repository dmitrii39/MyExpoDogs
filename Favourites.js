import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export function Favourites({navigation, route}) {
  const {breed} = route.params;
  const [image, setImage] = useState(breed.image);

  useEffect(() => {
    setImage(route.params?.breed?.image);
  }, [route.params]);

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Favourites;
//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
