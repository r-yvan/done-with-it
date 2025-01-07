import { Text, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function Index() {
  return (
    <View className="bg-blue-300">
      <Text className="font-body text-3xl">Dashboard</Text>
      <Link href="/(tabs)/profile">Home</Link>
      <View>
        <Entypo name="link" size={24} color="black" />
      </View>
    </View>
  );
}
