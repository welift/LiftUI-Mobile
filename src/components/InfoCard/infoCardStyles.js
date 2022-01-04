import colors from '../../theme/color'

export const styles = {
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.secondaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 14,
    lineHeight: 14,
    color: colors.secondary,
    fontWeight: '700',
    letterSpacing: .3
  },
  content: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
  line: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 2,
  }
}