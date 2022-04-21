import  React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import axios from 'axios';
export function HomeScreen({navigation}) {
  const loadData = async ()=> {
    const image = await axios.get('https://api.thecatapi.com/v1/images/search');
    const data = image.data;
    const i = data[0];
   
    console.log(data)
  
  }
  loadData();
  const renderItem = ()=> {
    return (
      <View style={styles.block}>
    <Image source={{uri:"https://picsum.photos/200", width:100, height:100 }}/>
    <View style={styles.dogTextWrapper}>
      <Text style={styles.dogTitle}>Breed</Text>
      <Text style={styles.dogText}>Dog description</Text>
    </View>
      </View>
    )
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
  dogTextWrapper: {
    marginLeft: 10,
  },

  dogTitle: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },

  dogText: {
    fontFamily: "Cochin",
    fontSize: 14,
  },

  block: {
   padding: 10,
   flexDirection: 'row',
   width: '90%',
   borderColor: '#000',
   borderWidth: 1,
   borderRadius: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//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


export default HomeScreen;