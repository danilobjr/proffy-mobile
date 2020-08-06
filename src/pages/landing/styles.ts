import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.poppins,
    color: colors.titleOnPrimary,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: fonts.poppinsBold,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  button: {
    height: 150,
    width: '48%',
    // backgroundColor: '#333',
    backgroundColor: colors.secundary,
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: colors.primaryLighter,
  },
  buttonText: {
    fontFamily: fonts.archivoBold,
    color: colors.buttonText,
    fontSize: 20,
  },
  schedules: {
    fontFamily: fonts.poppins,
    color: colors.textOnPrimary,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
})

export { styles }
