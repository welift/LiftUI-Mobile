import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  innerCenter: {
    flex: 1,
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
  },
  tile: {
    paddingTop: 8,
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
  toggleTile: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    shadowOffset: {
      height: -4
    },
    elevation: 10,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    textAlign: 'center',
    paddingTop: 16,
  }
})