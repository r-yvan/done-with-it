import { View, Text } from "react-native";
import React from "react";
import { IconHome } from "@tabler/icons-react-native";
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  return (
    <View>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View>
                <IconHome size={20} color="#AAAAAA" />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
