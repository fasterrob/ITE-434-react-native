import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
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

import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-slice";
import { ActivityIndicator, View } from "react-native";
import { getProfile } from "./services/auth-service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarActiveBackgroundColor: "lightblue",
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ tabBarLabel: "หน้าหลัก" }}
      />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "กล้อง" }}
      />
    </Tab.Navigator>
  );
};

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

const CameraStackScreen = () => {
  return (
    <CameraStack.Navigator
      initialRouteName="Camera"
      screenOptions={{
        headerShown: false,
      }}
    >
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
    </CameraStack.Navigator>
  );
};

const App = (): React.JSX.Element => {
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await getProfile();
      if (res?.data.data.user) {
        dispatch(setProfile(res.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkLogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
            }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="Product" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

// export default App;

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
export default AppWrapper;
