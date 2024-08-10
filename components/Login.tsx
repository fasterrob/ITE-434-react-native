import { View, TextInput, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    // \S+ = any 1 or more character that not empty space
    // @ = find "@" character
    // \. = find "." character
    // start regex with "/" and end with "/"
    return recheckEmail.test(email);
  };

  const handleSubmit = () => {
    let errorMessage = "";
    if (!name) {
      errorMessage += "Please Enter Name\n";
    }

    if (!email) {
      errorMessage += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      errorMessage = "Invalid Email format\n";
    }


    if (!password) {
      errorMessage += "Please Enter password";
    } else if (password.length < 6) {
      errorMessage = "Please Password must be at lease 6 characters\n";
    } 

    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
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
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
