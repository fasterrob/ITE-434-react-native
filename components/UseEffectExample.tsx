import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

const UseEffectExample = (): React.JSX.Element => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncressCount1 = () => {
    setCount1(count1 + 1);
  };

  const handleIncressCount2 = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("Use Effect 1 run after every render");
  });

  useEffect(() => {
    console.log("Use Effect 2 Run only when count 1 changes");
  }, [count1]);

  useEffect(() => {
    console.log("User Effect 3 ");
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ marginTop: 50 }}>Count1: {count1}</Text>
      <Button title="Increment Count1" onPress={handleIncressCount1} />
      <Text>{"\n\n"}</Text>
      <Text>Count2: {count2}</Text>
      <Button title="Increment Count2" onPress={handleIncressCount2} />
    </View>
  );
};

export default UseEffectExample;
