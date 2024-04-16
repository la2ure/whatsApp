import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatLog from "./src/screens/ChatLog";
import ChatScreen from "./src/screens/ChatScreen";
import Message from "./src/components/Message";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",

    paddingVertical: 50,
  },
});
