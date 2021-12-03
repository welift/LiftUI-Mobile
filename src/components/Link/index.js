import React from "react"
import { Text, Linking, View } from "react-native"
import { styles } from "./linkStyles"

const Link = ({
  label,
  href
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.link} onPress={() => Linking.openURL(href)}>{label}</Text>
    </View>
  )
}

export default Link