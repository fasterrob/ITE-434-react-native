import React from "react";
import { FlatList, Text, View } from "react-native";
import { stylesFlatlist } from "../styles/styles";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

function FlatListExample() {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  const _renderItem = ({ item }: { item: UserItem }) => {
    return (
      <View style={stylesFlatlist.item}>
        <Text style={stylesFlatlist.name}>{item.name}</Text>
        <Text style={stylesFlatlist.email}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View style={stylesFlatlist.container}>
      <FlatList
        data={user}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default FlatListExample;
