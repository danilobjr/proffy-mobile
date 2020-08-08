import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import { styles } from './styles'

type Teacher = {
  avatar: string
  bio: string
  name: string
  cost: number
  subject: string
  whatsapp: string
}

type Props = {
  favorite?: boolean
  teacher: Teacher
}

const TeacherItem: FC<Props> = ({ favorite, teacher }) => {
  const favoriteButtonIcon = !!favorite ? unfavoriteIcon : heartIcon

  const {
    avatar,
    bio,
    name,
    cost,
    subject,
    whatsapp,
  } = teacher

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/Hour {'   '}
          <Text style={styles.value}>US$ {cost}</Text>
        </Text>

        <View style={styles.actions}>
          <RectButton style={[styles.favoriteButton, !!favorite && styles.favorite]}>
            <Image source={favoriteButtonIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Contact</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export { TeacherItem }
