import { View } from "react-native";
import ProfileScreen from "./components/ProfileScreen";
import React from "react";
import { styles } from "./styles/styles";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";

const App = (): React.JSX.Element => {
  return (
    <View style={styles.background}>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample /> */}
      <FlatListcallBackend />
    </View>
  );
};

export default App;
