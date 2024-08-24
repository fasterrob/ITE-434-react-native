import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
};

function AxiosgetData(): React.JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //get Data by axios
  const fetchData = async () => {
    try {
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
      console.log(res);
    } catch (error) {
      console.error(error);
      setError("faild to fetch users");
      throw error;
    } finally {
      setLoading(false);
    }
  };
  //end fetchData

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#000055" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={users}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    >
      {" "}
    </FlatList>
  );
}

export default AxiosgetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
