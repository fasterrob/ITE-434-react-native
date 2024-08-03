import { View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name === "" && email === "") {
      Alert.alert("Alert", "Please Enter Name\nPlease Enter Email");
    } else if (name === "") {
      Alert.alert("Alert", "Please Enter Name");
    } else if (email === "") {
      Alert.alert("Alert", "Please Enter Email");
    } else {
      Alert.alert("Alert", "Success");
    }
  };

  return (
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
