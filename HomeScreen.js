import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
export function HomeScreen({navigation}) {
  const loadData = async ()=> {
    const image = await axios.get('https://api.thedogapi.com/v1/images/search');
    const data = image.data;
    const i = data[0];
    console.log(i)
    console.log(i.url)
   

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
    <Button
      title="Go to Favorites"
      onPress={() => navigation.navigate('Favorites')}
    />
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


//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


export default HomeScreen;