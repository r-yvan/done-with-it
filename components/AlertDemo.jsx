import { View, Text, Button, Alert } from "react-native";
import React from "react";

const AlertDemo = () => {
  return (
    <View>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert(
            "An Alert",
            "I was simply trying how create and alert and see what happens!!",
            [{ text: "Close" }, { text: "Ok" }]
          )
        }
      />
    </View>
  );
};

export default AlertDemo;
