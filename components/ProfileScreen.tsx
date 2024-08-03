import { Text, View, Image, Button } from "react-native";
import { styles } from "../styles/styles";

import React, { useState } from "react";

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
            color="#553D36"
            onPress={handleChangeName}
          />
          <Text>{"\n"}</Text>
          <Button
            title="chane image"
            color="#553D36"
            onPress={handleChangeImage}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;