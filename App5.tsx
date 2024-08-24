import { View } from "react-native";
import ProfileScreen from "./components/ProfileScreen";
import React from "react";
import { styles } from "./styles/styles";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewsApp from "./components/NewsApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample /> */}
      {/* <FlatListcallBackend /> */}
      <NewsApp/>
    </View>
  );
};

export default App;
