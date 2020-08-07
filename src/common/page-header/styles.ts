import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.primary,
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  title: {
    maxWidth: 160,
    marginVertical: 40,
    fontFamily: fonts.archivoBold,
    fontSize: 24,
    color: colors.titleOnPrimary,
    lineHeight: 32,
  },
})

export { styles }
