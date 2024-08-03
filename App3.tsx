import { Alert, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/styles";

export default function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  }, [fullname]);

  const handleButtonClick = () => {
    Alert.alert("Hello", `Input your fullname:\n${fullname}`);
  };

  return (
    <View style={stylesPractice.container}>
      <AppHeader fullname={fullname} message={message} />
      <Content message={message} handleButtonClick={handleButtonClick} />
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
      <AppFooter footerMessage={footerMessage} />
    </View>
  );
}
