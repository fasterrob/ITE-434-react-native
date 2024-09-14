import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";
import { findAllProducts } from "../services/product-service";
import { ListItem } from "@rneui/base";
import { Avatar, Badge } from "@rneui/themed";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: "Product",
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
    });
  }, [navigation]);

  const renderItem: ListRenderItem<any> = ({ item }: { item: any }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              productId: item.id,
              productTitle: item.title,
            })
          }
        >
          <ListItem bottomDivider>
            <Avatar source={{ uri: item.picture }} size={50} rounded />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <Badge
              value={item.view}
              status="success"
              containerStyle={{ marginRight: 10 }}
            />
          </ListItem>
        </TouchableOpacity>
      </>
    );
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await findAllProducts();
      setProducts(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProducts();
    }, [])
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={getProducts}
        />
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
