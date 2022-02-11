import { useEffect } from 'react';
import { Text, View, Button } from 'react-native'
import styles from '../styles'

export default function Profile({ navigation, route }) {
  console.log(route)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log('get data')
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>ini halaman Profile</Text>
      <Button title='Go to Wishlist' onPress={() => navigation.navigate('Wishlist')} />
    </View>
  );
}