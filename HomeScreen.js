import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function HomeScreen({navigation}) {
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