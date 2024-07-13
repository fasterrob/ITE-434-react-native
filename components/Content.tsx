import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
type messageType = {
  message: string;
  fullname: string;
};

const Content = ({ message, fullname }: messageType): React.JSX.Element => {
  const handleButton = () => {
    Alert.alert("Hello", fullname);
  };
  return (
    <View>
      <Text style={styles.text}>{message}</Text>
      <Button title="Click ME" onPress={handleButton} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
