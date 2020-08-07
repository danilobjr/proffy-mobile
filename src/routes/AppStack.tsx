import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LandingPage } from '../pages/landing'
import { TeachPage } from '../pages/teach'
import { LearnTabs } from './LearnTabs'

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Landing" component={LandingPage} />
      <Screen name="Teach" component={TeachPage} />
      <Screen name="Learn" component={LearnTabs} />
    </Navigator>
  </NavigationContainer>
)

export { AppStack }
