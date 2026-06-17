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
  Modal,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

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

const ALL_SERVICES = [
  {
    id: "viral-video",
    title: "Viral Your Video",
    desc: "Apni video ko FYP par chalayein",
    icon: "zap",
    accent: "#FE2C55",
    main: true,
  },
  {
    id: "account-unbanned",
    title: "Account Unbanned",
    desc: "Banned account wapas layein",
    icon: "shield",
    accent: "#00FF66",
    main: true,
  },
  {
    id: "ban-warning",
    title: "Ban Warning Remove",
    desc: "Account se warning khatam karein",
    icon: "alert-triangle",
    accent: "#FFCC00",
    main: true,
  },
  {
    id: "not-recommended",
    title: "Account Not Recommended Fix",
    desc: "Not eligible for FYP fix karein",
    icon: "refresh-cw",
    accent: "#00E0FF",
    main: true,
  },

  {
    id: "unfreeze-account",
    title: "Unfreeze Your Account",
    desc: "Views freeze problem theek karein",
    icon: "unlock",
    accent: "#FE2C55",
  },
  {
    id: "trending-hashtags",
    title: "Trending Hashtags",
    desc: "Sahi hashtags copy karein",
    icon: "hash",
    accent: "#00FF66",
  },
  {
    id: "upload-timing",
    title: "Best Upload Timing",
    desc: "Video upload karne ka sahi waqt",
    icon: "clock",
    accent: "#FFCC00",
  },
  {
    id: "get-followers",
    title: "How to Get Followers",
    desc: "Followers barhane ka tarika",
    icon: "users",
    accent: "#00E0FF",
  },
  {
    id: "get-likes",
    title: "How to Get Likes",
    desc: "Likes zyada karne ka formula",
    icon: "heart",
    accent: "#FE2C55",
  },
  {
    id: "trending-sounds",
    title: "Trending Sounds",
    desc: "Viral music aur sounds check karein",
    icon: "music",
    accent: "#00FF66",
  },
  {
    id: "views-problem",
    title: "Views Problem Fix",
    desc: "0 views problem hal karein",
    icon: "eye",
    accent: "#FFCC00",
  },
  {
    id: "health-check",
    title: "Account Health Check",
    desc: "Apne account ka score check karein",
    icon: "activity",
    accent: "#00E0FF",
  },
  {
    id: "how-to-monetise",
    title: "How to Monetize Your Account",
    desc: "TikTok se paise kamana shuru karein",
    icon: "dollar-sign",
    accent: "#FE2C55",
  },
  {
    id: "go-live",
    title: "How to Go Live",
    desc: "Live option enable karne ka tarika",
    icon: "radio",
    accent: "#00FF66",
  },
  {
    id: "withdraw-money",
    title: "How to Withdraw From TikTok",
    desc: "TikTok se paise nikalne ka tarika",
    icon: "credit-card",
    accent: "#FFCC00",
  },
  {
    id: "create-uk-account",
    title: "How to Create UK Account",
    desc: "UK/USA account banane ka tarika",
    icon: "globe",
    accent: "#00E0FF",
  },
];

export default function LuxuryConsole() {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);
  const [activeTab, setActiveTab] = useState("home");
  const [moreServicesVisible, setMoreServicesVisible] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const mainServices = ALL_SERVICES.filter((s) => s.main);
  const secondaryServices = ALL_SERVICES.filter((s) => !s.main);

  const handleServicePress = (service: (typeof ALL_SERVICES)[0]) => {
    setMoreServicesVisible(false);

    setTimeout(() => {
      router.push({
        pathname: `/tool/${service.id}`,
        params: { title: service.title },
      });
    }, 100);
  };

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === "home") {
      setMoreServicesVisible(false);
      router.replace("/");
    } else if (tabName === "logs") {
      setMoreServicesVisible(false);
      router.replace("/logs"); // <--- Yeh pehle commented out tha, ab properly switch karega!
    } else if (tabName === "vault") {
      setMoreServicesVisible(false);
      router.replace("/two"); // <--- Premium screen par real navigation redirect lagaya
    }
  };

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
          onPress={() => {
            // Kisi bhi sub-tab se jab back dabayein, pehle straight index/homepage par fenke!
            router.replace("/");
          }}
        >
          <Ionicons name="chevron-back" size={20} color={THEME.colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.floatingCircleBtn}
          activeOpacity={0.7}
          onPress={() => {
            setMoreServicesVisible(false);
            router.replace("/");
          }}
        >
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
                <Text style={{ color: THEME.colors.crimson }}>TIKTOK</Text> TOOL
              </Text>
              <Text style={styles.headerSubtitle}>SECURE CORE INTERFACE</Text>
            </View>
          </View>

          {/* Earning Sponsor Banner */}
          <TouchableOpacity
            style={styles.adBanner}
            activeOpacity={0.9}
            onPress={() =>
              handleServicePress(
                ALL_SERVICES.find((s) => s.id === "create-uk-account")!,
              )
            }
          >
            <View style={styles.adBadge}>
              <Ionicons
                name="shield-checkmark"
                size={11}
                color={THEME.colors.yellow}
              />
              <Text style={styles.adBadgeText}>SPONSORED SECURE NODE</Text>
            </View>
            <Text style={styles.adTitleText}>How to Create UK Account</Text>
            <Text style={styles.adDescriptionText}>
              Bina kisi VPN ke UK/USA ka monetised dashboard account banayein
              aur dollar kamayein.
            </Text>
          </TouchableOpacity>

          <Text style={styles.sectionHeading}>RECOVERY MODULES</Text>

          {/* 4 Premium Main Grid Cards */}
          <View style={styles.cardGrid}>
            {mainServices.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.cardFrame}
                activeOpacity={0.85}
                onPress={() => handleServicePress(item)}
              >
                <View
                  style={[
                    styles.cardIconBox,
                    {
                      backgroundColor: `${item.accent}10`,
                      borderColor: `${item.accent}25`,
                    },
                  ]}
                >
                  <Feather
                    name={item.icon as any}
                    size={20}
                    color={item.accent}
                  />
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* View More Button Triggering Bottom Sheet */}
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
            onPress={() => router.push("/more-services")}
          >
            <Text style={styles.actionButtonText}>View More Services</Text>
            <Feather
              name="chevron-down"
              size={15}
              color={THEME.colors.crimson}
            />
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>

      {/* MORE SERVICES POPUP DRAWER (MODAL) */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={moreServicesVisible}
        onRequestClose={() => setMoreServicesVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeaderRow}>
              <Text style={styles.modalTitleText}>MORE SERVICES</Text>
              <TouchableOpacity
                onPress={() => setMoreServicesVisible(false)}
                style={styles.modalCloseCircle}
              >
                <Ionicons name="close" size={20} color={THEME.colors.white} />
              </TouchableOpacity>
            </View>

            <ScrollView
              contentContainerStyle={styles.modalScrollArea}
              showsVerticalScrollIndicator={false}
            >
              {secondaryServices.map((service) => (
                <TouchableOpacity
                  key={service.id}
                  style={styles.modalListItem}
                  onPress={() => handleServicePress(service)}
                >
                  <View
                    style={[
                      styles.modalListIconBox,
                      { backgroundColor: `${service.accent}15` },
                    ]}
                  >
                    <Feather
                      name={service.icon as any}
                      size={16}
                      color={service.accent}
                    />
                  </View>
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.modalListTitle}>{service.title}</Text>
                    <Text style={styles.modalListDesc}>{service.desc}</Text>
                  </View>
                  <Feather
                    name="chevron-right"
                    size={16}
                    color={THEME.colors.muted}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Premium Bottom Navigation Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleTabPress("logs")}
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
          onPress={() => handleTabPress("home")}
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
          onPress={() => handleTabPress("vault")}
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

      {/* STICKY BOTTOM IMAGE AD BANNER */}
      <View style={styles.bottomAdBanner}>
        <View style={styles.adPlaceholderContainer}>
          <View style={styles.adBadgeMini}>
            <Text style={styles.adBadgeMiniText}>ADVERTISEMENT</Text>
          </View>
          <Text style={styles.adPlaceholderText}>
            Premium Sponsored Node Active
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: THEME.colors.bg },
  container: { flex: 1 },
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
  contentContainer: { padding: 20, paddingTop: 120, paddingBottom: 160 },
  header: {
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
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
    textAlign: "center",
  },
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
  cardTitle: { color: THEME.colors.white, fontSize: 14, fontWeight: "700" },
  cardDesc: {
    color: THEME.colors.muted,
    fontSize: 11,
    marginTop: 4,
    lineHeight: 14,
  },
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

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: THEME.colors.card,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: height * 0.7,
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  modalHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitleText: {
    color: THEME.colors.white,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
  modalCloseCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.05)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalScrollArea: { gap: 12, paddingBottom: 30 },
  modalListItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.colors.bg,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  modalListIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modalListTitle: {
    color: THEME.colors.white,
    fontSize: 13,
    fontWeight: "700",
  },
  modalListDesc: { color: THEME.colors.muted, fontSize: 11, marginTop: 2 },

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
    shadowColor: THEME.colors.crimson,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },

  bottomAdBanner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#111115",
    borderTopWidth: 1,
    borderColor: "#1C1C22",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 11,
  },
  adPlaceholderContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#050507",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#1C1C22",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  adBadgeMini: {
    position: "absolute",
    top: 4,
    left: 6,
    backgroundColor: "rgba(254, 44, 85, 0.1)",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "#FE2C55",
  },
  adBadgeMiniText: { color: "#FE2C55", fontSize: 7, fontWeight: "900" },
  adPlaceholderText: { color: "#62626E", fontSize: 11, fontWeight: "600" },
});
