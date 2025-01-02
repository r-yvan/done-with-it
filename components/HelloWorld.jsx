import { View, Text, Button } from "react-native";
import { useState } from "react";
import React from "react";

const HelloWorld = () => {
  const [name, setName] = useState("Rubuto Yvan");
  return (
    <View className="flex flex-col gap-1 pt-32">
      <Text className="text-3xl text-white">Hello World!!</Text>
      <Text className="text-white">My Name is {name}</Text>
      <View className="pt-2">
        <Button title="Update State" onPress={() => setName("Noella")} />
      </View>
    </View>
  );
};

export default HelloWorld;
