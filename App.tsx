import { View } from "react-native";
import ProfileScreen from "./components/ProfileScreen";
import React from "react";
import UseEffectExample from "./components/UseEffectExample";
import Login from "./components/Login";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <UseEffectExample/> */}
      <ProfileScreen />
      <Login />
    </View>
  );
};

export default App;
