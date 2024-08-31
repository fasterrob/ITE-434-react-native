import { View } from "react-native";
import React from "react";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import { NavigationContainer } from "@react-navigation/native";
import ModalExample from "./components/ModalExample";
import WeatherApp from "./components/WeatherApp";
import AboutScreen from "./screens/AboutScreen";
// import AxiosgetData from "./components/AxiosgetData";
// import AxiospostData from "./components/AxiospostData";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <ModalExample/> */}
      {/* <WeatherApp/> */}
      <AboutScreen/>
    </View>
  );
};

export default App;
