import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Top header hidden
        tabBarStyle: { display: "none" }, // Bottom default bar hidden (Kyunki custom use kar rahe hain)
      }}
    >
      {/* 1. Main Homepage */}
      <Tabs.Screen name="index" options={{ title: "Home" }} />

      {/* 2. Server Logs Screen (Yeh missing thi, jis se back blank ho raha tha) */}
      <Tabs.Screen name="logs" options={{ title: "Server Logs" }} />

      {/* 3. Premium Screen */}
      <Tabs.Screen name="two" options={{ title: "Premium" }} />
    </Tabs>
  );
}
