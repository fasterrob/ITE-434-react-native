import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { findProductById } from "../services/product-service";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ListItem, Tile } from "@rneui/themed";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const DetailScreen = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const route = useRoute();
  const navigation = useNavigation();

  const { productId, productTitle } = route.params as {
    productId: string;
    productTitle: string;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: productTitle,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="Menu"
            iconName="arrow-back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProductById = async () => {
    try {
      setLoading(true);
      const response = await findProductById(productId);
    //   console.log(response.data.data);
      setProduct(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  const renderItem: ListRenderItem<any> = ({ item }: { item: any }) => {
    return (
      <>
        <Tile
          imageSrc={{
            uri: "https://images.unsplash.com/photo-1449028288989-df05d40bcbb4?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cache: "force-cache",

          }}
          key={item.ch_id}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          containerStyle={styles.tileContainer}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
        />
      </>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={() => getProductById()}
        />
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
    color: "white", // สีขาวสำหรับชื่อ
  },
  tileContainer: {
    margin: 10,
    borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //กำหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาสำหรับ Android
    shadowOffset: { width: 0, height: 2 }, //กำหนดตำแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา
    opacity: 1, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "white", // สีขาวสำหรับวันที่
  },
});
