import React from 'react'
import { View } from 'react-native'
import { PageHeader } from '../../common/page-header'

import { styles } from './styles'

const TeacherListPage = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Available proffys" />
    </View>
  )
}

export { TeacherListPage }
