import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { PageHeader } from '../../common/page-header'
import { TeacherItem } from '../../common/teacher-item'

import { styles } from './styles'

const TeacherListPage = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Available proffys">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Subject</Text>
          <TextInput style={styles.input} />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Week day</Text>
              <TextInput style={styles.input} placeholder="Only work days" />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Time</Text>
              <TextInput style={styles.input} placeholder="Which ever you want" />
            </View>
          </View>
        </View>
      </PageHeader>

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
