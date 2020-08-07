import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextInput, BorderlessButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { PageHeader } from '../../common/page-header'
import { TeacherItem } from '../../common/teacher-item'

import { colors } from '../../styles'
import { styles } from './styles'

const TeacherListPage = () => {
  const [filtersVisible, setFiltersVisible] = useState(false)

  const toggleFilters = () => setFiltersVisible(currentValue => !currentValue)

  return (
    <View style={styles.container}>
      <PageHeader
        title="Available proffys"
        elementRight={(
          <BorderlessButton onPress={toggleFilters}>
            <MaterialCommunityIcons
              name="filter-variant"
              color={colors.buttonText}
              size={24}
            />
          </BorderlessButton>
        )}
      >
        {filtersVisible && (
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
        )}
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
