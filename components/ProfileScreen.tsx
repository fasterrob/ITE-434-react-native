import { Text, View, Image, Button } from "react-native";
import { styles } from "../styles/styles";

import React, { useState } from "react";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileImage.jpg");
  const newImage = require("../assets/cat.jpg");

  const [name, setName] = useState("Thatchanin Moonphon");
  const [profile, setProfile] = useState(profileImage);

  const handleChangeName = () => setName("New name");
  const handleChangeImage = () => setProfile(newImage);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profile} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button
            title="change name"
            color="#841584"
            onPress={handleChangeName}
          />
          <Text>{" \n"}</Text>
          <Button
            title="chane image"
            color="#841584"
            onPress={handleChangeImage}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
