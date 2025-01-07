import { View, Text } from "react-native";
import React from "react";
import Icon from '@react-native-vector-icons/entypo';
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
                <Icon name="link" size={30} color="#900" />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
