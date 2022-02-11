import { Text, View, Button } from 'react-native'
import styles from '../styles'

export default function Wishlist({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ini halaman Wishlist</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}