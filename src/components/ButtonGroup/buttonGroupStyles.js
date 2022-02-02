import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  vertical: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  horizontalButtonOne: {
    margin: 0,
    flex: 1,
    marginEnd: 12,
  },
  verticalButtonOne: {
    margin: 0,
    marginBottom: 16,
  },
  horizontalButtonTwo: {
    margin: 0,
    flex: 1,
  },
  verticalButtonTwo: {
    marginTop: 0,
  }
})