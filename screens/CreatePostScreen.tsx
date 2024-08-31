import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CreatePostScreen = ({ navigation }: any) => {
  const [postText, setPostText] = useState("");
  return (
    <>
      <TextInput
        multiline
        placeholder="Tell Something...?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
};

export default CreatePostScreen;
