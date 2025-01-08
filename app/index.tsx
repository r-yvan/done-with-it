import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import "../global.css";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
export default function Index() {
  useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex bg-[#000000] w-full h-screen">
          <ImageBackground
            source={require("@/assets/images/Image.png")}
            resizeMode="cover"
            className="flex pt-[350px] h-full"
          >
            <View className="flex items-center justify-center">
              <Text className="text-white text-4xl font-pregular">
                Done<Text className="text-[#60AA60]">With</Text>It
              </Text>
            </View>
            <Text className="text-white font-pregular text-2xl pl-6 pt-8">
              Sell your unused materials to world wide market through Done
              <Text className="text-[#60AA60]">With</Text>It.
            </Text>
            <Text className="pl-6 text-white pt-5 text-md font-pregular">
              DoneWithIt is a mobile app to help you sell your unwanted things,
              those things you are obsessed with or you no longer use
            </Text>
            <Link href="/(auth)/sign-in">
              <View className="flex items-center">
                <TouchableOpacity className="flex justify-center items-center px-4 py-3 rounded-lg bg-[#60AA60]">
                  <Text className="text-white text-lg font-pregular">
                    Register Now
                  </Text>
                </TouchableOpacity>
              </View>
            </Link>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
