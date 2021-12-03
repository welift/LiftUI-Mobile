import { StyleSheet } from "react-native";

import colors from "@theme/color";

export const styles = StyleSheet.create({
  tile: (width = null, height = null, padding = null) => ({
    backgroundColor: colors.neutral,
    borderRadius: 10,
    shadowColor: '#997659',
    minWidth: (width ? width : 346),
    minHeight: (height ? height : 96),
    shadowOpacity: .15,
    shadowRadius: 10,
    padding: (padding ? padding : 36)
  })
})