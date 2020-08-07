import React from 'react'
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { TeacherListPage } from '../pages/teacher-list'
import { FavoritesPage } from '../pages/favorites'
import { fonts, colors } from '../styles'

const { Navigator, Screen } = createBottomTabNavigator()

const styles = {
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: 64,
  },
  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 0,
    width: 20,
    height: 20,
  },
  labelStyle: {
    fontFamily: fonts.archivoBold,
    fontSize: 13,
    marginLeft: 16,
  },
  inactiveBackgroundColor: colors.boxFooter,
  activeBackgroundColor: '#ebebf5',
  inactiveTintColor: '#c1bccc',
  activeTintColor: colors.textTitle,
} as BottomTabBarOptions

const setFocusedIconColor = (focused: boolean, baseColor: string) =>
  focused ? colors.primary : baseColor

const LearnTabs = () => (
  <Navigator tabBarOptions={styles}>
    <Screen
      name="TeacherListPage"
      component={TeacherListPage}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size, focused }) =>
          <Ionicons
            name="ios-easel"
            color={setFocusedIconColor(focused, color)}
            size={size}
          />
      }}
    />

    <Screen
      name="FavoritesPage"
      component={FavoritesPage}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color, size, focused }) =>
          <Ionicons
            name="ios-heart"
            color={setFocusedIconColor(focused, color)}
            size={size}
          />
      }}
    />
  </Navigator>
)

export { LearnTabs }
