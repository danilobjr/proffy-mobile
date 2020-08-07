import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 8,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  label: {
    color: colors.textOnPrimary,
    fontFamily: fonts.poppins,
  },
  input: {
    height: 54,
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
})

export { styles }
