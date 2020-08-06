import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import teachIcon from '../../assets/images/icons/teach.png'
import heartIcon from '../../assets/images/icons/heart.png'

const LandingPage = () => (
  <View style={styles.container}>
    <Image source={landingImage} style={styles.banner} />

    <Text style={styles.title}>
      Welcome, {'\n'}
      <Text style={styles.titleBold}>Choose your path.</Text>
    </Text>

    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimary]}
      >
        <Image source={studyIcon} />
        <Text style={styles.buttonText}>Learn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
      >
        <Image source={teachIcon} />
        <Text style={styles.buttonText}>Teach</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.schedules}>
      More than 200 lessons scheduled {' '}
      <Image source={heartIcon} />
    </Text>
  </View>
)

export { LandingPage }
