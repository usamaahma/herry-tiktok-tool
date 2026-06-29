import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Dono jagah se header hata diya
        animation: "none", // Blinking se bachne ke liye
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="logs" />
      <Stack.Screen name="two" />
    </Stack>
  );
}
