import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppFooter = (): React.JSX.Element => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX</Text>;
  const isLogin = true;
  return (
    <View>
      <Text style={styles.myText}>
        {hello} Date:{new Date().toLocaleDateString()}
      </Text>
      {hello2}
      {isLogin === true && <Text>Welcome Boss</Text>}
      {isLogin === true ? (
        <Text>Welcome Mary</Text>
      ) : (
        <Text>ยังไม่ได้ล็อคอิน</Text>
      )}
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  myText: {
    color: "red",
  },
});
