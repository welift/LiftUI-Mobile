// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const {
    resolver: {
      sourceExts,
      assetExts
    }
  } = getDefaultConfig(__dirname)

  return {
    transformer: {
      bableTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  }
})()

module.exports = getDefaultConfig(__dirname);
