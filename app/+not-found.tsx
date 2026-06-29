import { Link, Stack } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        {/* Link ko button ki tarah wrap kiya gaya hai */}
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Go back to Home!</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#050507", // Aapke app ka background color
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  link: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: "#1C1C22",
    borderRadius: 8,
  },
  linkText: {
    fontSize: 14,
    color: "#FFCC00", // Aapke premium theme ka color
    fontWeight: "600",
  },
});
