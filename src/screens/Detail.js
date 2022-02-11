import { Text, View, Button, Image } from 'react-native'
import styles from '../styles'

export default function Detail({ navigation, route }) {
  console.log(route)
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' }}
      />
    </View>
  );
}