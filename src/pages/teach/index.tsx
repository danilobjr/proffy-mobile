import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import teachBgImage from '../../assets/images/teach-background.png'

import { styles } from '../teach/styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const TeachPage = () => {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={teachBgImage}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Do you want to teach?</Text>
        <Text style={styles.description}>
          Awesome! To apply you need to access our web platform.
        </Text>
      </ImageBackground>

      <RectButton style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Ok</Text>
      </RectButton>
    </View>
  )
}

export { TeachPage }
