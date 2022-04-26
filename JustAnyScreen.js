import  React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import axios from 'axios';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

axios.defaults.headers.common['x-api-key'] = '66c3dea9-7df2-4600-920a-338a909960a9';

export function JustAnyScreen({navigation}) {
  const [url, setUrl] = useState();
  // const [name, setName] = useState()
  // const [breeds, setBreeds] = useState()
const [image, setImage] = useState();

  const saveToFavourites = async () => {
    try {
      const id = 'BJa4kxc4X';
      const result = await axios.post('https://api.thedogapi.com/v1/favourites', {
        image_id: image.id
      });
      console.log(result)
    }
    catch(error) {
      console.log(error)
    }
    
  };

  const loadData = async ()=> {
    // const image = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}`);
    const image = await axios.get(`https://api.thedogapi.com/v1/images/search`, {params: {
      breed_id: 222
    }});
    

  



    
    const data = image.data;
    const i = data[0];
    // const dog = data[4];
    setImage(i);
    // setName(dog.name)
    // setBreeds(image)
    console.log('PPPPPPP', image)
    
  
  }

  useEffect(()=> loadData(), [])
 
  const breed_id = 222;
    const str = `Hello! ${breed_id}`
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 60, }}>
      <Text>JustAnyScreen</Text>
      <Image source={{uri: image?.url, width:200, height:200 }}/>
      <Button title='Next photo' onPress={() => loadData()}/>
      <Button title='Save to favourites' onPress={() => saveToFavourites()}/>
    <Button
      title="Go to HOME"
      onPress={() => navigation.navigate('HomeScreen')}
    />
   
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
    fontFamily: "Cochin",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },

  dogText: {
    fontFamily: "Cochin",
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





export default JustAnyScreen;