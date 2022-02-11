import { Text, View, Button, Image } from 'react-native'
import { PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler'
import styles from '../styles'

export default function About({ navigation }) {
  const handlePanGesture = (event) => {
    console.log('=======')
    console.log(event)
  }

  const handlePinchGesture = (e) => {
    console.log(e, 'pinch')
  }
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handlePanGesture}>
        <PinchGestureHandler onGestureEvent={handlePinchGesture}>
            <Image
              style={styles.img}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' }}
            />
            {/* <Button onPress={() => console.log('something')} title='test' /> */}
        </PinchGestureHandler>
      </PanGestureHandler>
    </View>
  );
}