import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export function Favorites({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

export default  Favorites;
//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
