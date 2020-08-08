import React, { useState, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { api } from '../../services'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import teachIcon from '../../assets/images/icons/teach.png'
import heartIcon from '../../assets/images/icons/heart.png'

import { styles } from './styles'

const LandingPage = () => {
  const { navigate } = useNavigation()
  const [connectionsAmount, setConnectionsAmount] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      setConnectionsAmount(response.data?.connectionsAmount)
    })
  }, [])

  const navigateToTeachPage = () => navigate('Teach')
  const navigateToLearnPage = () => navigate('Learn')

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.title}>
        Welcome, {'\n'}
        <Text style={styles.titleBold}>Choose your path.</Text>
      </Text>

      <View style={styles.actions}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={navigateToLearnPage}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Learn</Text>
        </RectButton>

        <RectButton
          style={[styles.button]}
          onPress={navigateToTeachPage}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </RectButton>
      </View>

      <Text style={styles.schedules}>
        {connectionsAmount} lessons scheduled {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export { LandingPage }
