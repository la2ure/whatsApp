import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image:
      "https://images.unsplash.com/photo-1624313603844-dda78ecf39b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Lukas",
  },
  lastMessage: {
    text: "Hi, are you free next saturday ? I want to visit the new science exposition !🍄",
    createdAt: "8:00",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
