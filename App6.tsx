import { View } from "react-native";
import React from "react";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
// import AxiosgetData from "./components/AxiosgetData";
// import AxiospostData from "./components/AxiospostData";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <AxiosgetData /> */}
      {/* <AxiospostData /> */}
      {/* <WeatherLondon /> */}
      <WeatherBangkok />
    </View>
  );
};

export default App;
