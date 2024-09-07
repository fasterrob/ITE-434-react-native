import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AppLogo = (): React.JSX.Element => {
  return (
    <>
      <Image
        source={require("../assets/tni_logo.png")}
        resizeMode="cover"
        style={styles.logoContainer}
      />
    </>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 10,
    width: 70,
    height: 50,
  },
});
