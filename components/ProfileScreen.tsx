import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "../styles/styles";
import React from "react";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileImage.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.profileName}>Thatchanin Moonphon</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
