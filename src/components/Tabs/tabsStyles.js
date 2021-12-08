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
    width: '100%'
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
    fontWeight: '500',
    paddingTop: 16,
    paddingBottom: 16,
    color: selected ? colors.basic : colors.basicSoft
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