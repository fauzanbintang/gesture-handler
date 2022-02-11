import styles from '../styles'
import React from 'react'
import { View, Image, Button, Text } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import { useEffect } from 'react'

export default function Home({ navigation }) {

  useEffect(() => {
    console.log('test')
  }, [])

  const panGesture = Gesture.Tap()
    .onBegin((e) => {
      console.log(e)
    })
    .onStart((e) => {
      console.log(e)
    })
    .onEnd((e) => {
      console.log(e)
    })

  return (
    <View >
      <GestureDetector gesture={panGesture}>
        {/* <View style={{ height: 100, width: 100, backgroundColor: 'black' }}>

        </View> */}
        <Image
          style={[styles.img]}
          source={{ uri: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' }}
        />
      </GestureDetector>
    </View>
  )
}