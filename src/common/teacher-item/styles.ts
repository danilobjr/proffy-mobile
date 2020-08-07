import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: colors.boxBase,
    borderWidth: 1,
    borderColor: colors.lineOnWhite,
    borderRadius: 8,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontFamily: fonts.archivoBold,
    color: colors.textTitle,
    fontSize: 20,
  },
  subject: {
    fontFamily: fonts.poppins,
    color: colors.textBase,
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: fonts.poppins,
    fontSize: 14,
    lineHeight: 24,
    color: colors.textBase,
  },
  footer: {
    padding: 24,
    marginTop: 24,
    backgroundColor: colors.boxFooter,
    alignItems: 'center',
  },
  price: {
    fontFamily: fonts.poppins,
    color: colors.textBase,
    fontSize: 14,
  },
  value: {
    fontFamily: fonts.archivoBold,
    color: colors.primary,
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favorite: {
    backgroundColor: '#e33d3d'
  },
  contactButton: {
    width: 56,
    height: 56,
    backgroundColor: colors.secundary,
    borderRadius: 8,
    marginRight: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactButtonText: {
    fontFamily: fonts.archivoBold,
    fontSize: 16,
    color: colors.buttonText,
    marginLeft: 16,
  },
})

export { styles }
