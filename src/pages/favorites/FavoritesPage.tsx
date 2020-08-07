import React from 'react'
import { View } from 'react-native'
import { PageHeader } from '../../common/page-header'

import { styles } from './styles'

const FavoritesPage = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Favorites proffys" />
    </View>
  )
}

export { FavoritesPage }
