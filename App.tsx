import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";

import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App(): React.JSX.Element {
  const onClick = () =>
    Alert.alert("Simple Button pressed", "React Native is Fun!!");

  const users = [
    { id: 1001, name: "John" },
    { id: 1002, name: "Marry" },
  ];
  return (
    <View style={styles.container}>
      <AppHeader title="Hello Header" year={2000} />
      <AppHeader title="Hello Header2" />
      <Text style={styles.text}>Hello React Native</Text>
      {users.map((data, index) => {
        return (
          <Text key={data.id}>
            No. {index + 1} ID: {data.id} Name: {data.name}
          </Text>
        );
      })}
      <Button title="Press me" onPress={onClick} />
      <AppFooter />
      {/* <StatusBar style="auto" /> */}
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
