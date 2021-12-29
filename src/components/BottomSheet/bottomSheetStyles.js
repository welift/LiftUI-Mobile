import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  innerCenter: backgroundColor => ({
    flex: 1,
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 5,
    elevation: 5,
    backgroundColor: backgroundColor,
  }),
  tile: {
    paddingBottom: 0,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    shadowOffset: {
      height: -4
    },
    elevation: 10,
  },
  content: {
    textAlign: 'center',
    paddingTop: 16,
  }
})