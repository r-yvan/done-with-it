import { Text, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="bg-blue-300">
      <Text className="font-body text-3xl">Dashboard</Text>
      <Link href="/home">Home</Link>
    </View>
  );
}
