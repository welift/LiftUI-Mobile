import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  innerCenter: (visible) => ({
    flex: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (visible ? 'rgba(0, 0, 0, .25)' : 'inherit'),
    zIndex: 5,
    elevation: 5,
  }),
  tile: {
    paddingBottom: 0,
    borderRadius: 20
  },
  title: {
    textAlign: 'center',
    padding: 16,
    paddingTop: 0
  },
  content: {
    textAlign: 'center',
    paddingStart: 16,
    paddingEnd: 16
  }
})