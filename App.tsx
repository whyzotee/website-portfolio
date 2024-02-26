import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const width = useSharedValue(300);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ height: "100%" }}>
      <View style={styles.container}>
        <Animated.Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/53619535?v=4",
          }}
          style={imageStyle(width).image}
        />
        <View style={{ width: 20 }}></View>
        <View style={styles.info}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Hello World
          </Text>
          <Text style={styles.textThemeDark}>Name: Chatnarint Boonsaeng</Text>
          <Text style={styles.textThemeDark}>AKA: whyzotee</Text>
          <Text style={styles.workStatus}>Not avaliable for job</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

const imageStyle = (width: any) =>
  StyleSheet.create({
    image: {
      width,
      height: 300,
      borderRadius: 18,
    },
  });

const styles = StyleSheet.create({
  textThemeLight: {
    color: "#505050",
    fontSize: 18,
  },
  textThemeDark: {
    color: "white",
    fontSize: 18,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
  },

  workStatus: {
    marginTop: 4,
    color: "white",
    borderRadius: 8,
    fontWeight: "500",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    backgroundColor: "#FF6868",
  },
  info: {
    gap: 4,
  },
});
