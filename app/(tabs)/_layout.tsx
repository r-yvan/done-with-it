import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const TabsLayout = () => {
  return (
    <View>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Octicons
                  name="home"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name="add-circle-outline"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome5
                  name="user-circle"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Octicons
                  name="comment-discussion"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
