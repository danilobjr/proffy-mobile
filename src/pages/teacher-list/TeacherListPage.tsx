import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { PageHeader } from '../../common/page-header'
import { TeacherItem } from '../../common/teacher-item'

import { colors } from '../../styles'
import { styles } from './styles'
import { api } from '../../services'

const TeacherListPage = () => {
  const [teachers, setTeachers] = useState([])
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const toggleFilters = () => setFiltersVisible(currentValue => !currentValue)

  const convertWeekDayToNumber = (weekDay: string) => {
    switch (weekDay.toLowerCase()) {
      case 'sunday':
        return 0;
      case 'monday':
        return 1;
      case 'tuesday':
        return 2;
      case 'wednesday':
        return 3;
      case 'thursday':
        return 4;
      case 'friday':
        return 5;
      case 'saturday':
        return 6;
      default:
        break;
    }
  }

  const handleSubmit = async () => {
    // TODO put this inside a useEffect hook
    const response = await api.get('lessons', {
      params: {
        subject,
        week_day: convertWeekDayToNumber(weekDay),
        time,
      },
    })

    setTeachers(response?.data)
  }

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
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={setSubject}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week day</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Only work days"
                  value={weekDay}
                  onChangeText={setWeekDay}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Which ever you want"
                  value={time}
                  onChangeText={setTime}
                />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Search</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      {teachers.length > 0 && (
        <ScrollView
          style={styles.list}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          {teachers.map((teacher: any) =>
            <TeacherItem
              key={teacher.user_id}
              teacher={teacher}
            />
          )}
        </ScrollView>
      )}
    </View>
  )
}

export { TeacherListPage }
