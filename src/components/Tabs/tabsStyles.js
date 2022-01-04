import { StyleSheet } from "react-native";

import colors from '../../theme/color'
import types from '../../theme/type'

export const styles = {
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  headerBar: {
    backgroundColor: colors.neutral,
    display: 'flex',
    justifyContent: "flex-start",
    height: 48,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .05,
    shadowColor: '#997659',
    zIndex: 10000
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: (minTabWidth) => ({
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: minTabWidth
  }),
  tabText: selected => ({
    fontSize: 16,
    lineHeight: 16,
    fontWeight: selected ? '500' : '300',
    paddingTop: 16,
    paddingBottom: 16,
    color: selected ? colors.basic : colors.basicSoft,
    letterSpacing: .3
  }),
  selected: (tabWidth, marginCalc) => ({
    position: 'relative',
    top: 2,
    borderRadius: 2,
    borderBottomWidth: 4,
    borderColor: colors.primary,
    width: tabWidth,
    marginLeft: marginCalc
  })
}