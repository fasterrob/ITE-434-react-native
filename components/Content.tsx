import { Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";

import { stylesPractice } from "../styles/styles";

type messageType = {
  message: string;
  fullname: string;
};

const Content = ({ message, fullname }: messageType): React.JSX.Element => {
  const [displayFullname, setDisplayfullname] = useState("");

  const handleButton = () => {
    setDisplayfullname(fullname);
    Alert.alert("Hello", `Input your fullname:\n${fullname}`);
  };
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="Click ME" onPress={handleButton} />
    </View>
  );
};

export default Content;
