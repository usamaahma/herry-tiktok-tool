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
import { Ionicons, Feather } from "@expo/vector-icons";

const THEME = {
  colors: {
    bg: "#050507",
    card: "#111115",
    border: "#1C1C22",
    crimson: "#FE2C55",
    white: "#FFFFFF",
    muted: "#62626E",
    yellow: "#FFCC00",
  },
};

// Saare cards ka data jo pehle bar mein khulta tha
const ALL_SERVICES = [
  { id: "viral-video", title: "Viral Video Protocol", icon: "trending-up" },
  { id: "account-unbanned", title: "Unban Request", icon: "shield" },
  {
    id: "love-calculator",
    title: "Love Compatibility Analysis",
    icon: "heart",
  },
  { id: "find-partner", title: "Partner Matrix Finder", icon: "search" },
  { id: "ban-warning", title: "Remove Warning", icon: "alert-triangle" },
  { id: "not-recommended", title: "Fix FYP Feed", icon: "eye" },
  { id: "unfreeze-account", title: "Unfreeze Account", icon: "wind" },
  { id: "trending-hashtags", title: "Hashtag Generator", icon: "hash" },
  { id: "upload-timing", title: "Best Upload Time", icon: "clock" },
  { id: "get-followers", title: "Growth Pipeline", icon: "users" },
  { id: "get-likes", title: "Like Multiplier", icon: "heart" },
  { id: "trending-sounds", title: "Viral Sound Finder", icon: "music" },
  { id: "views-problem", title: "Zero Views Fix", icon: "zap" },
  { id: "health-check", title: "Security Audit", icon: "activity" },
  { id: "how-to-monetise", title: "Monetization Setup", icon: "dollar-sign" },
  { id: "go-live", title: "Unlock Live Stream", icon: "tv" },
  { id: "withdraw-money", title: "Payout Verification", icon: "credit-card" },
  { id: "create-uk-account", title: "Create US/UK Account", icon: "globe" },
];

export default function MoreServicesScreen() {
  const router = useRouter();

  // Hardware back button dabane par seedha safety ke sath home bhejo
  useEffect(() => {
    const backAction = () => {
      router.replace("/");
      return true;
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

      {/* FIXED TOP HEADER */}
      <View style={styles.headerBar}>
        {/* BACK BUTTON */}
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.circleBtn} activeOpacity={0.7}>
            <Ionicons
              name="chevron-back"
              size={20}
              color={THEME.colors.white}
            />
          </TouchableOpacity>
        </Link>

        <Text style={styles.headerTitleText}>ALL TERMINAL SERVICES</Text>

        {/* HOME BUTTON */}
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.circleBtn} activeOpacity={0.7}>
            <Ionicons
              name="home-outline"
              size={18}
              color={THEME.colors.white}
            />
          </TouchableOpacity>
        </Link>
      </View>

      {/* SERVICES GRID */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionSubtitle}>
          Select a core vulnerability patch to initialize.
        </Text>

        <View style={styles.gridContainer}>
          {ALL_SERVICES.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.card}
              activeOpacity={0.7}
              onPress={() => {
                // Aapke dynamic tool route par safe redirect safely parameters ke sath
                router.push({
                  pathname: "/tool/[id]",
                  params: { id: service.id, title: service.title },
                });
              }}
            >
              <View style={styles.iconContainer}>
                <Feather
                  name={service.icon as any}
                  size={20}
                  color={THEME.colors.crimson}
                />
              </View>
              <Text style={styles.cardTitle} numberOfLines={2}>
                {service.title}
              </Text>
              <Feather
                name="chevron-right"
                size={14}
                color={THEME.colors.muted}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: THEME.colors.bg },
  headerBar: {
    marginTop: 50,
    paddingHorizontal: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.border,
  },
  circleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: THEME.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleText: {
    color: THEME.colors.white,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
  },
  scrollContainer: { padding: 20, paddingTop: 15, paddingBottom: 60 },
  sectionSubtitle: {
    color: THEME.colors.muted,
    fontSize: 13,
    marginBottom: 20,
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: THEME.colors.card,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    minHeight: 110,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(254, 44, 85, 0.08)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: THEME.colors.white,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 10,
    lineHeight: 18,
  },
  arrowIcon: { alignSelf: "flex-end", marginTop: 4 },
});
