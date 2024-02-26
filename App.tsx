import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/53619535?v=4",
        }}
        style={styles.image}
      />
      <View style={{ width: 20 }}></View>
      <View style={styles.info}>
        <Text style={{ color: "#505050", fontSize: 24, fontWeight: "bold" }}>
          Hello World !
        </Text>
        <Text style={styles.textThemeLight}>Chatnarint Boonsaeng</Text>
        <Text style={styles.textThemeLight}>aka whyzotee</Text>
        <Text style={styles.workStatus}>Not avaliable for job</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
  },
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
    backgroundColor: "white",
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
