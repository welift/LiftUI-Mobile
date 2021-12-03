import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  innerCenter: {
    flex: 1,
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 5,
    elevation: 5,
  },
  tile: {
    paddingBottom: 0,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%'
  },
  content: {
    textAlign: 'center',
    paddingTop: 16,
  }
})