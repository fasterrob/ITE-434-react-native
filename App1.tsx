import { StyleSheet, View } from "react-native";

import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppHeader
        fullname="Thatchanin Moonphon"
        message="This message from App.tsx"
      />
      <Content message="Message from App.tsx" fullname="Thatchanin Moonphon" />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
