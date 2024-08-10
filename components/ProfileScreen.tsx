import { Text, View, Image, Button } from "react-native";
import { styles } from "../styles/styles";

import React, { useState } from "react";
import Login from "./Login";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileImage.jpg");
  const newImage = require("../assets/cat.jpg");

  const [name, setName] = useState("Thatchanin Moonphon");
  const [profile, setProfile] = useState(profileImage);

  const handleChangeName = () =>
    setName(name == "Thatchanin Moonphon" ? "Tity" : "Thatchanin Moonphon");
  const handleChangeImage = () =>
    setProfile(profile == profileImage ? newImage : profileImage);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profile} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button
            title="change name"
            onPress={handleChangeName}
          />
          <Text>{"\n"}</Text>
          <Button
            title="chane image"
            onPress={handleChangeImage}
          />
        </View>
      </View>
      <Login />
    </View>
  );
};

export default ProfileScreen;
