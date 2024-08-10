import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Linking, Text, View } from "react-native";
import { stylesNews } from "../styles/styles";

interface User {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
}

function NewsApp() {
  const API_KEY = "095e824dcc6545b68e469eb8f2ccc26f";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const _renderItem = ({ item }: { item: User }) => {
    return (
      <View style={stylesNews.card}>
        <Text style={stylesNews.headline}>{item.title}</Text>
        <Text style={stylesNews.date}>
          {new Date(item.publishedAt).toLocaleDateString()}
        </Text>
        <Text style={stylesNews.description}>{item.description}</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL(item.url)}
        >
          Link
        </Text>
      </View>
    );
  };

  return (
    <View style={stylesNews.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
}

export default NewsApp;
