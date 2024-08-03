import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { styles, stylesPractice, stylesLogin } from "../styles/styles";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name === "" && email === "") {
      Alert.alert("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={stylesLogin.container}>
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Submit" />
      </View>
    </View>
  );
};

export default Login;
