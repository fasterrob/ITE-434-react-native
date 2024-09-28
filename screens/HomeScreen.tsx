import { Alert, Button, StyleSheet, View } from "react-native";
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
import { Text } from "@rneui/base";

import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { logout } from "../services/auth-service";
import { selectAuthState, setIsLogin } from "../auth/auth-slice";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const dispatch = useAppDispatch();

  const { profile } = useAppSelector(selectAuthState);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            onPress={async () => {
              await logout();
              dispatch(setIsLogin(false));
            }}
          />
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
    <View style={styles.container}>
      <MaterialIcons name="home" size={40} color="pink" />
      {profile ? (
        <>
          <Text h3>Welcome {profile.name}</Text>
          <Text>
            Email: {profile.email} ID: {profile.id} Role: {profile.role}
          </Text>
        </>
      ) : null}
      <Button title="About us" onPress={goToAbout} />
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
