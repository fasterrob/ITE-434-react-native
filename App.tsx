import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
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
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";

import { useAppSelector } from "./redux-toolkit/hooks";
import { selectAuthState } from "./auth/auth-slice";
import { ActivityIndicator, View } from "react-native";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

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

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name="login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

const App = (): React.JSX.Element => {
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  // const [isLogin] = useState(false);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <SafeAreaProvider>
        <HeaderButtonsProvider stackType="native">
          {isLogin ? (
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
          ) : (
            <LoginStackScreen />
          )}
        </HeaderButtonsProvider>
      </SafeAreaProvider>
      <Toast />
    </>
  );
};

// export default App;

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};
export default AppWrapper;
