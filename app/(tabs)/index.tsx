import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

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

export default function LuxuryConsole() {
  const fadeAnim = new Animated.Value(0);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.root}>
      {/* StatusBar ko absolute translucent kiya taake content top black screen ke piche jaye */}
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* ─── FLOATING TOP BAR (Aapke Reference Screenshot Jaisa) ─── */}
      <View style={styles.floatingTopBar}>
        {/* Floating Circular Back Button */}
        <TouchableOpacity style={styles.floatingCircleBtn} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={20} color={THEME.colors.white} />
        </TouchableOpacity>

        {/* Floating Circular Home/Action Button */}
        <TouchableOpacity style={styles.floatingCircleBtn} activeOpacity={0.7}>
          <Ionicons name="home-outline" size={18} color={THEME.colors.white} />
        </TouchableOpacity>
      </View>

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Main App Title Section */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>
                HERRY{" "}
                <Text style={{ color: THEME.colors.crimson }}>OVERWATCH</Text>
              </Text>
              <Text style={styles.headerSubtitle}>SECURE CORE INTERFACE</Text>
            </View>
            <View style={styles.badgeContainer}>
              <View style={styles.livePulse} />
              <Text style={styles.badgeText}>ONLINE</Text>
            </View>
          </View>

          {/* Earning Sponsor Banner */}
          <TouchableOpacity style={styles.adBanner} activeOpacity={0.9}>
            <View style={styles.adBadge}>
              <Ionicons
                name="shield-checkmark"
                size={11}
                color={THEME.colors.yellow}
              />
              <Text style={styles.adBadgeText}>SPONSORED SECURE NODE</Text>
            </View>
            <Text style={styles.adTitleText}>Bypass Device & Network Bans</Text>
            <Text style={styles.adDescriptionText}>
              Initialize elite network tunneling for high eCPM regions (USA,
              Dubai, Saudi Arabia).
            </Text>
          </TouchableOpacity>

          <Text style={styles.sectionHeading}>RECOVERY MODULES</Text>

          {/* 4 Premium Grid Cards */}
          <View style={styles.cardGrid}>
            <TouchableOpacity style={styles.cardFrame} activeOpacity={0.85}>
              <View
                style={[
                  styles.cardIconBox,
                  {
                    backgroundColor: `${THEME.colors.crimson}10`,
                    borderColor: `${THEME.colors.crimson}25`,
                  },
                ]}
              >
                <Feather name="shield" size={20} color={THEME.colors.crimson} />
              </View>
              <Text style={styles.cardTitle}>Permanent Ban</Text>
              <Text style={styles.cardDesc}>
                Deploy official legal unban requests
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardFrame} activeOpacity={0.85}>
              <View
                style={[
                  styles.cardIconBox,
                  {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                ]}
              >
                <Feather
                  name="file-text"
                  size={20}
                  color={THEME.colors.white}
                />
              </View>
              <Text style={styles.cardTitle}>Audit Scripts</Text>
              <Text style={styles.cardDesc}>
                Copy high-converting appeal text
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardFrame} activeOpacity={0.85}>
              <View
                style={[
                  styles.cardIconBox,
                  {
                    backgroundColor: `${THEME.colors.yellow}10`,
                    borderColor: `${THEME.colors.yellow}25`,
                  },
                ]}
              >
                <Feather name="clock" size={20} color={THEME.colors.yellow} />
              </View>
              <Text style={styles.cardTitle}>Restriction Fix</Text>
              <Text style={styles.cardDesc}>
                Bypass temporary posting blocks
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardFrame} activeOpacity={0.85}>
              <View
                style={[
                  styles.cardIconBox,
                  {
                    backgroundColor: `${THEME.colors.crimson}10`,
                    borderColor: `${THEME.colors.crimson}25`,
                  },
                ]}
              >
                <Feather name="mail" size={20} color={THEME.colors.crimson} />
              </View>
              <Text style={styles.cardTitle}>VIP Mail Support</Text>
              <Text style={styles.cardDesc}>
                Direct internal verification path
              </Text>
              <View style={styles.lockIndicator}>
                <Ionicons
                  name="lock-closed"
                  size={9}
                  color={THEME.colors.crimson}
                />
                <Text style={styles.lockText}>AD</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Text style={styles.actionButtonText}>View More Systems</Text>
            <Feather
              name="chevron-down"
              size={15}
              color={THEME.colors.crimson}
            />
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>

      {/* ─── Premium Bottom Navigation Bar ─── */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("logs")}
          activeOpacity={0.6}
        >
          <Feather
            name="activity"
            size={20}
            color={
              activeTab === "logs" ? THEME.colors.white : THEME.colors.muted
            }
          />
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "logs"
                    ? THEME.colors.white
                    : THEME.colors.muted,
              },
            ]}
          >
            Server Logs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.centerTabItem}
          onPress={() => setActiveTab("home")}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.homeIconGlow,
              {
                backgroundColor:
                  activeTab === "home"
                    ? THEME.colors.crimson
                    : THEME.colors.card,
              },
            ]}
          >
            <Ionicons name="home" size={22} color={THEME.colors.white} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("vault")}
          activeOpacity={0.6}
        >
          <Feather
            name="unlock"
            size={20}
            color={
              activeTab === "vault" ? THEME.colors.yellow : THEME.colors.muted
            }
          />
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "vault"
                    ? THEME.colors.yellow
                    : THEME.colors.muted,
              },
            ]}
          >
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

  // Floating Top Header Structure
  floatingTopBar: {
    position: "absolute",
    top: 50, // Safe zone allocation
    left: 20,
    right: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 999, // Forced view over everything else
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
    // Premium blurred shadow injection
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  contentContainer: { padding: 20, paddingTop: 120, paddingBottom: 110 },

  // App Core Title Setup
  header: {
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: THEME.colors.white,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 9,
    color: THEME.colors.muted,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginTop: 4,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.colors.card,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  livePulse: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: THEME.colors.crimson,
    marginRight: 6,
  },
  badgeText: { color: THEME.colors.white, fontSize: 9, fontWeight: "700" },

  // Ad Area
  adBanner: {
    backgroundColor: THEME.colors.card,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
  },
  adBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255, 204, 0, 0.05)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: THEME.colors.yellow,
  },
  adBadgeText: { color: THEME.colors.yellow, fontSize: 9, fontWeight: "800" },
  adTitleText: { color: THEME.colors.white, fontSize: 16, fontWeight: "700" },
  adDescriptionText: {
    color: THEME.colors.muted,
    fontSize: 12,
    marginTop: 5,
    lineHeight: 16,
  },

  // 4 Cards Setup
  sectionHeading: {
    fontSize: 11,
    fontWeight: "800",
    color: THEME.colors.muted,
    letterSpacing: 1.5,
    marginBottom: 15,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 14,
  },
  cardFrame: {
    backgroundColor: THEME.colors.card,
    width: "47.5%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    padding: 16,
    position: "relative",
  },
  cardIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: { color: THEME.colors.white, fontSize: 15, fontWeight: "700" },
  cardDesc: {
    color: THEME.colors.muted,
    fontSize: 11,
    marginTop: 4,
    lineHeight: 14,
  },

  lockIndicator: {
    position: "absolute",
    top: 14,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: "rgba(254, 44, 85, 0.08)",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: THEME.colors.crimson,
  },
  lockText: { color: THEME.colors.crimson, fontSize: 8, fontWeight: "800" },

  actionButton: {
    marginTop: 22,
    backgroundColor: THEME.colors.card,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  actionButtonText: {
    color: THEME.colors.white,
    fontSize: 13,
    fontWeight: "700",
  },

  // Bottom Navigation Menu
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
    shadowColor: THEME.colors.crimson,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
});
