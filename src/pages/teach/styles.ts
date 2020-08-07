import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 200,
    fontFamily: fonts.archivoBold,
    fontSize: 32,
    color: colors.titleOnPrimary,
    lineHeight: 37,
  },
  description: {
    maxWidth: 240,
    marginTop: 24,
    fontFamily: fonts.poppins,
    fontSize: 16,
    color: colors.textOnPrimary,
    lineHeight: 26,
  },
  button: {
    height: 58,
    marginVertical: 40,
    backgroundColor: colors.secundary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontFamily: fonts.archivoBold,
  },
})

export { styles }
