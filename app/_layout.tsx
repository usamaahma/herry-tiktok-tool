import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  return (
    // Is master layout se hum default bars ko mukammal disable kar rahe hain
    <Tabs
      screenOptions={{
        headerShown: false, // Is se top ka white "Tab One" gayab ho jayega
        tabBarStyle: { display: "none" }, // Is se bottom ka bura default "Tab Two" bar gayab ho jayega
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
