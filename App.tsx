import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./screens/MenuScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ProductStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "หน้าหลัก",
        }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "เกี่ยวกับเรา" }}
      />
      <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
    </HomeStack.Navigator>
  );
};

const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator initialRouteName="Product">
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
};

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
            }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="CreatePost" component={CreatePostScreen} />
            <Drawer.Screen name="Product" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;
