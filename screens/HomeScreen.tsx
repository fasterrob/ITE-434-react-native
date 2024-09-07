import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="Menu" iconName="menu" onPress={() => {
            navigation.openDrawer()
          }} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const goToAbout = () => {
    navigation.navigate("About", {
      companyId: 1,
      companyName: "Thai-Nichi Institute Technology",
    });
  };
  return (
    <View>
      <Icon name="home" size={40} color="pink" />
      <Text>HomeScreen</Text>
      <Button title="About us" onPress={goToAbout} />

      <View style={styles.postContainer}>
        <Button
          title="Create post"
          onPress={() => navigation.navigate("CreatePost")}
        />
        <Text style={styles.postText}>
          Post:
          <Text style={styles.postContent}> {route.params?.post}</Text>
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});
