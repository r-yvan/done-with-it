import {
  ScrollView,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex bg-[#151515] w-full h-screen">
          <ImageBackground
            source={require("@/assets/images/Image.png")}
            resizeMode="cover"
            className="flex pt-[360px] h-full w-full"
          >
            <View className="flex items-center justify-center">
              <Text className="text-white text-4xl font-body">
                Done<Text className="text-[#60AA60]">With</Text>It
              </Text>
            </View>
            <Text className="text-white font-body text-2xl pl-12 pt-8">
              Sell to world wide market through Done
              <Text className="text-[#60AA60]">With</Text>It.
            </Text>
            <View className="flex items-center">
              <TouchableOpacity className="flex justify-center items-center px-2 py-1 bg-[#60AA60]">
                <Text className="text-white font-body">Join Community</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
