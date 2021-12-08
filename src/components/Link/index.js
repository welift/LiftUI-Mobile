import React from "react"
import { Text, Linking, View } from "react-native"
import { styles } from "./linkStyles"

const Link = ({
  label,
  href,
  onPress
}) => {

  const handlePress = !href ? onPress : () => Linking.openURL(href)
  return (
    <View style={styles.container}>
      <Text style={styles.link} onPress={handlePress}>{label}</Text>
    </View>
  )
}

export default Link