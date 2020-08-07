import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import { styles } from './styles'

type Props = {
  favorite?: boolean
}

const TeacherItem: FC<Props> = ({ favorite }) => {
  const favoriteButtonIcon = !!favorite ? unfavoriteIcon : heartIcon

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/danilobjr.png' }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>Danilo Barros</Text>
          <Text style={styles.subject}>Math</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/Hour {'   '}
          <Text style={styles.value}>US$ 20.00</Text>
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
