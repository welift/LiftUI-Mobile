import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  vertical: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  horizontalButtonOne: {
    margin: 0,
    marginEnd: 12
  },
  verticalButtonOne: {
    margin: 0,
    marginBottom: 16,
  },
  horizontalButtonTwo: {
    margin: 0
  },
  verticalButtonTwo: {
    marginTop: 0,
  }
})