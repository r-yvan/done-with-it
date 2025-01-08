import { ScrollView, Image, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex justify-center items-center bg-[#151515] w-full h-full">
          <Image
            source={require("@/assets/images/Image.png")}
            resizeMode="contain"
          />
          <View>
            <Text className="text-white font-bold ">
              Done<Text className="text-[#60AA60]">With</Text>It
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
