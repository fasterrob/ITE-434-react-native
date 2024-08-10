import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { stylesFlatlistBackend } from "../styles/styles";
interface User {
  id: number;
  name: string;
  email: string;
}

function FlatListcallBackend() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const _renderItem = ({ item }: { item: User }) => {
    return (
      <View style={stylesFlatlistBackend.item}>
        <Text style={stylesFlatlistBackend.name}>{item.name}</Text>
        <Text style={stylesFlatlistBackend.email}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View style={stylesFlatlistBackend.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

export default FlatListcallBackend;
