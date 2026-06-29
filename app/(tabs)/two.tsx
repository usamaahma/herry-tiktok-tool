import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  BackHandler,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

const PREMIUM_FEATURES = [
  { id: "go-live", title: "How To Live on TikTok", icon: "tv" },
  { id: "create-uk-account", title: "How To Make UK Account", icon: "globe" },
  {
    id: "account-unbanned",
    title: "Special Appeal For TikTok Unban",
    icon: "shield",
  },
];

const THEME = {
  colors: {
    bg: "#050507",
    card: "#111115",
    border: "#1C1C22",
    yellow: "#FFCC00",
    white: "#FFFFFF",
    muted: "#62626E",
  },
};

export default function PremiumScreen() {
  const router = useRouter();

  useEffect(() => {
    const backAction = () => {
      // Forceful navigation to home, clear history to avoid blank screens
      router.replace("/(tabs)");
      return true; // Prevents app exit
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.header}>
        <Text style={styles.title}>PREMIUM ACCESS</Text>
        <Text style={styles.subtitle}>Unlock expert-level protocols</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {PREMIUM_FEATURES.map((feat) => (
          <TouchableOpacity
            key={feat.id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: "/tool/[id]",
                params: { id: feat.id, title: feat.title, isPremium: "true" },
              })
            }
          >
            <View style={styles.iconBox}>
              <Feather
                name={feat.icon as any}
                size={24}
                color={THEME.colors.yellow}
              />
            </View>
            <Text style={styles.cardText}>{feat.title}</Text>
            <Feather name="lock" size={16} color={THEME.colors.muted} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* CUSTOM BOTTOM BAR */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/logs")}
          activeOpacity={0.6}
        >
          <Feather name="activity" size={20} color={THEME.colors.muted} />
          <Text style={[styles.tabText, { color: THEME.colors.muted }]}>
            Logs
          </Text>
        </TouchableOpacity>

        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.centerTabItem} activeOpacity={0.8}>
            <View
              style={[
                styles.homeIconGlow,
                { backgroundColor: THEME.colors.card },
              ]}
            >
              <Ionicons name="home" size={22} color={THEME.colors.white} />
            </View>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/two")}
          activeOpacity={0.6}
        >
          <Feather name="unlock" size={20} color={THEME.colors.yellow} />
          <Text style={[styles.tabText, { color: THEME.colors.yellow }]}>
            Premium
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: THEME.colors.bg },
  header: { padding: 20, paddingTop: 80, marginBottom: 10 },
  title: { color: THEME.colors.yellow, fontSize: 28, fontWeight: "900" },
  subtitle: { color: THEME.colors.muted, fontSize: 14 },
  list: { padding: 20 },
  card: {
    backgroundColor: THEME.colors.card,
    padding: 20,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  iconBox: { marginRight: 20 },
  cardText: {
    color: THEME.colors.white,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  bottomTabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 74,
    backgroundColor: "rgba(17, 17, 21, 0.98)",
    borderTopWidth: 1,
    borderTopColor: THEME.colors.border,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  tabItem: { alignItems: "center", justifyContent: "center", width: 70 },
  tabText: { fontSize: 9, fontWeight: "700", marginTop: 4 },
  centerTabItem: { top: -12, justifyContent: "center", alignItems: "center" },
  homeIconGlow: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: THEME.colors.bg,
  },
});
