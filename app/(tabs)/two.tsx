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
import { useRouter } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

const THEME = {
  colors: {
    bg: "#050507",
    card: "#111115",
    border: "#1C1C22",
    crimson: "#FE2C55",
    yellow: "#FFCC00",
    white: "#FFFFFF",
    muted: "#62626E",
  },
};

export default function TabTwoScreen() {
  const router = useRouter();

  // Hardware Back Button Control (Agar user phone ka back button dabaye)
  useEffect(() => {
    const backAction = () => {
      router.replace("/"); // Straight home page par bhejo
      return true; // Prevent default behavior (blank screen)
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

      {/* FLOATING TOP BAR */}
      <View style={styles.floatingTopBar}>
        <TouchableOpacity
          style={styles.floatingCircleBtn}
          activeOpacity={0.7}
          onPress={() => router.replace("/")}
        >
          <Ionicons name="chevron-back" size={20} color={THEME.colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.floatingCircleBtn}
          activeOpacity={0.7}
          onPress={() => router.replace("/")}
        >
          <Ionicons name="home-outline" size={18} color={THEME.colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.mainTitle}>PREMIUM SYSTEM</Text>
          <Text style={styles.subtitle}>
            Unlock advanced high-authority social tools.
          </Text>
        </View>

        {/* Aapka Premium Content Yahan Aayega */}
        <View style={styles.lockCard}>
          <Feather name="lock" size={40} color={THEME.colors.yellow} />
          <Text style={styles.lockText}>VIP Modules Are Locked</Text>
        </View>
      </ScrollView>

      {/* CUSTOM BOTTOM TAB BAR */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace("/logs")}
          activeOpacity={0.6}
        >
          <Feather name="activity" size={20} color={THEME.colors.muted} />
          <Text style={[styles.tabText, { color: THEME.colors.muted }]}>
            Server Logs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.centerTabItem}
          onPress={() => router.replace("/")}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.homeIconGlow,
              { backgroundColor: THEME.colors.card },
            ]}
          >
            <Ionicons name="home" size={22} color={THEME.colors.white} />
          </View>
        </TouchableOpacity>

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
  container: { flex: 1 },
  contentContainer: { padding: 20, paddingTop: 120, paddingBottom: 160 },
  floatingTopBar: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 999,
  },
  floatingCircleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  header: { alignItems: "center", marginBottom: 30 },
  mainTitle: {
    color: THEME.colors.yellow,
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 1,
  },
  subtitle: {
    color: THEME.colors.muted,
    marginTop: 5,
    fontSize: 13,
    textAlign: "center",
  },
  lockCard: {
    backgroundColor: THEME.colors.card,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: 16,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
  },
  lockText: { color: THEME.colors.white, fontSize: 16, fontWeight: "700" },
  bottomTabBar: {
    position: "absolute",
    bottom: 70,
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
    zIndex: 10,
  },
  tabItem: { alignItems: "center", justifyContent: "center", width: 70 },
  tabText: { fontSize: 9, fontWeight: "700", marginTop: 4, letterSpacing: 0.3 },
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
