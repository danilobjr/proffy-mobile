import React, { FC, ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import { styles } from './styles'

type Props = {
  elementRight?: ReactNode
  title: string
}

const PageHeader: FC<Props> = ({ elementRight, title, children }) => {
  const { navigate } = useNavigation()

  const backToLandingPage = () => navigate('Landing')

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={backToLandingPage}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {elementRight}
      </View>

      {children}
    </View>
  )
}

export { PageHeader }
