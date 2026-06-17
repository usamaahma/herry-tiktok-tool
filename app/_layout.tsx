import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#050507" },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
      <Stack.Screen
        name="tool/[id]"
        options={{ animation: "slide_from_bottom" }}
      />

      {/* Naya Page Register Kiya */}
      <Stack.Screen
        name="more-services"
        options={{ animation: "slide_from_right" }}
      />
    </Stack>
  );
}
