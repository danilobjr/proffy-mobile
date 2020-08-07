import React from 'react'
import { View, ScrollView } from 'react-native'
import { PageHeader } from '../../common/page-header'
import { TeacherItem } from '../../common/teacher-item'

import { styles } from './styles'

const TeacherListPage = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Available proffys" />

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

export { TeacherListPage }
