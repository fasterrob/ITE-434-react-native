import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, Icon, ListItem } from "@rneui/base";
import { useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState } from "../auth/auth-slice";

const MenuScreen = (props: any): React.JSX.Element => {
  const { profile } = useAppSelector(selectAuthState);
  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: profile ? "Welcome, " + profile.name : "",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
        placement="center"
      />
      <>
        <ListItem
          bottomDivider
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem onPress={() => props.navigation.navigate("Product")}>
          <Icon name="star" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
