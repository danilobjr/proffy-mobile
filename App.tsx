import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LandingPage } from './src/pages/landing'
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <LandingPage />
        <StatusBar style="auto" />
      </>
    );
  }
}
