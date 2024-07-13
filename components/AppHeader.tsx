import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AppHeaderProps = {
  fullname: string;
  message: string;
};

const AppHeader = ({
  fullname,
  message,
}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text>{fullname}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});
