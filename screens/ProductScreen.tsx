import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import AppLogo from '../components/AppLogo';

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const ProductScreen = () => {
  const navigation = useNavigation<any>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: "Product",
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
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})