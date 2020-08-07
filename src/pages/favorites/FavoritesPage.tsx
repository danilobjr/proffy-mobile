import React from 'react'
import { View, ScrollView } from 'react-native'
import { PageHeader } from '../../common/page-header'
import { TeacherItem } from '../../common/teacher-item'

import { styles } from './styles'

const FavoritesPage = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Favorites proffys" />

      <ScrollView
        style={styles.list}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export { FavoritesPage }
