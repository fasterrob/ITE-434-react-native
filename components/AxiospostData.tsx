import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

function AxiospostData() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleInputChange = (key: string, value: string) => {
    setFormData((prevStates) => ({ ...prevStates, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData
      );

      Alert.alert(
        "User Created",
        `
        ID: ${res.data.id}
        Name: ${res.data.name}
        Email: ${res.data.email}
        `
      );
    } catch (error) {
      Alert.alert("Error", "Fail to create user");
    }
  };

  return (
    <View style={styless.container}>
      <TextInput
        style={styless.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styless.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
}

export default AxiospostData;

const styless = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
