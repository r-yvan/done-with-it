import { View, Text, Image } from "react-native";
import React from "react";

interface Props {
  imageUri: string;
}
const ImageInput = ({ imageUri }: Props) => {
  return (
    <View>
      {imageUri ? (
        <Image source={{ uri: imageUri }} />
      ) : (
        <Image source={{ uri: "@/assets/images/favicon.png" }} />
      )}
    </View>
  );
};

export default ImageInput;
