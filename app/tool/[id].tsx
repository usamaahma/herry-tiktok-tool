import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  StatusBar,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

const THEME = {
  colors: {
    bg: "#050507",
    card: "#111115",
    border: "#1C1C22",
    crimson: "#FE2C55",
    white: "#FFFFFF",
    muted: "#62626E",
    success: "#00FF66",
    yellow: "#FFCC00",
  },
};

const SERVICE_POLICIES: Record<
  string,
  {
    guidelines: string[];
    steps: string[];
    generatedData?: { title: string; items: string[] };
  }
> = {
  "love-calculator": {
    guidelines: [
      "Both profile nodes must remain active during frequency synchronization.",
      "Vibration alignment algorithms extract character vector match indexes.",
    ],
    steps: [
      "Accessing core affection database telemetry...",
      "Matching name resonance sequences across primary nodes...",
      "Finalizing dynamic baseline compatibility parameters...",
    ],
  },
  "find-partner": {
    guidelines: [
      "Input a list of candidate strings separated clearly with commas.",
      "The engine calculates high-affinity synchronization locks automatically.",
    ],
    steps: [
      "Compiling potential candidate registry data arrays...",
      "Injecting randomized target vector calculations...",
      "Selecting the highest spiritual node weight match...",
    ],
  },
  "viral-video": {
    guidelines: [
      "Ensure video resolution is 1080p and uses high eCPM lighting parameters.",
      "Engagement retention rate must hit 35% in the initial 3 seconds.",
    ],
    steps: [
      "Metadata and SEO payload injection executed.",
      "FYP priority queue packet successfully assigned to your ID.",
    ],
    generatedData: {
      title: "ALGORITHM CO-EFFICIENT CHANNELS",
      items: [
        "Priority Region: Pakistan (PK-Optimized)",
        "Network Weights: 1.45x Boost",
      ],
    },
  },
  "trending-hashtags": {
    guidelines: [
      "Always mix 2 high-volume global tags with 3 niche local keywords.",
    ],
    steps: [
      "High-velocity traffic hashtags successfully pulled from registry.",
      "Custom optimization metadata payload ready for deployment.",
    ],
    generatedData: {
      title: "GENERATE RE-INDEXED HASHTAGS (TAP TO COPY)",
      items: [
        "#foryoupage",
        "#viralpakistan",
        "#standwithkashmir",
        "#trendingtech",
        "#accountboost2026",
      ],
    },
  },
  "account-unbanned": {
    guidelines: [
      "Submission must comply with Article 14.2 of community guidelines.",
    ],
    steps: [
      "Legal appeal parameters successfully compiled.",
      "Account shadow-ban payload removed.",
    ],
    generatedData: {
      title: "REGISTRY RELAY STATUS",
      items: ["Bypass Validation: SUCCESSFUL", "Clearance: 100%"],
    },
  },
  "ban-warning": {
    guidelines: [
      "Account history must show no active server block violations within 7 days.",
    ],
    steps: [
      "Historical violation logs cleared.",
      "Profile integrity score successfully restored.",
    ],
    generatedData: {
      title: "PROFILE INTEGRITY MATRIX",
      items: ["Current Safety Score: 98.4%", "Violation Flags: 0 Active"],
    },
  },
  "not-recommended": {
    guidelines: [
      "Content must contain original audio or authorized commercial tracks.",
    ],
    steps: [
      "FYP Recommendation Eligibility flag turned ON.",
      "Regional filtering system bypass applied.",
    ],
    generatedData: {
      title: "FYP ELIGIBILITY PARAMETERS",
      items: ["Feed Delivery: UNTHROTTLED", "Shadow-Filter: DEACTIVATED"],
    },
  },
  "unfreeze-account": {
    guidelines: [
      "Account daily active watch time session must exceed 15 minutes.",
    ],
    steps: [
      "Dormant user engagement tags cleared.",
      "Account reach multi-thread buffer size maximized.",
    ],
    generatedData: {
      title: "THROUGHPUT DISTRIBUTION ENGINE",
      items: ["Reach Multiplier: 2.5x Deployed", "Cache State: Cleaned"],
    },
  },
  "upload-timing": {
    guidelines: [
      "Analyze target audience peak activity zones in local time standard.",
    ],
    steps: [
      "Peak server throughput windows calculated.",
      "Automated scheduler sync code generated.",
    ],
    generatedData: {
      title: "OPTIMAL POSTING TIME WINDOWS",
      items: ["Slot 1: 06:15 PM - 07:45 PM", "Slot 2: 09:00 PM - 10:30 PM"],
    },
  },
  "get-followers": {
    guidelines: ["Profile visibility preference must be configured as Public."],
    steps: [
      "Follower funnel pipeline structure configured.",
      "Account discovery weight elevated.",
    ],
    generatedData: {
      title: "GROWTH FUNNEL TUNING",
      items: ["Discovery Node: ACTIVE", "Traffic Matrix: LINKED"],
    },
  },
  "get-likes": {
    guidelines: [
      "First frame visual dynamic must use high-contrast color tones.",
    ],
    steps: [
      "Reaction-ratio automation parameters optimized.",
      "Like retention weight multiplier added.",
    ],
    generatedData: {
      title: "ENGAGEMENT RETENTION VECTORS",
      items: ["Like Multiplier: Activated", "Hook Velocity Score: 94/100"],
    },
  },
  "trending-sounds": {
    guidelines: [
      "Always source sounds directly from the official trending sound deck.",
    ],
    steps: [
      "Elite high-eCPM viral sound list generated.",
      "Direct sound link anchor payload mapped.",
    ],
    generatedData: {
      title: "VIRAL SOUND MAP DATA",
      items: ["Sound Anchor Key: #Aud-7741", "eCPM Tier: Tier 1 Velocity"],
    },
  },
  "views-problem": {
    guidelines: [
      "Verify network connection isn't restricted by low-grade VPN routing.",
    ],
    steps: [
      "Zero-view algorithm bug successfully bypassed.",
      "Distribution pipeline bandwidth unthrottled.",
    ],
    generatedData: {
      title: "PIPELINE BANDWIDTH CONTROLLER",
      items: [
        "Algorithm Bug Override: PATCHED",
        "Bandwidth State: UNTHROTTLED",
      ],
    },
  },
  "health-check": {
    guidelines: [
      "System scans all active community violation parameters automatically.",
    ],
    steps: [
      "Comprehensive profile security audit completed.",
      "Detected threat patterns neutralized.",
    ],
    generatedData: {
      title: "SECURITY AUDIT REPUTATION",
      items: ["Health Score: 99.4%", "Tracker Status: 0 Threats Found"],
    },
  },
  "how-to-monetise": {
    guidelines: [
      "Account region settings must natively support the Creativity Program.",
    ],
    steps: [
      "Monetization readiness module securely prepared.",
      "Creator dashboard pre-check protocol applied.",
    ],
    generatedData: {
      title: "MONETIZATION REGION OVERLAY",
      items: [
        "Creativity Program Path: PREPARED",
        "Dashboard Pre-Check: COMPLIANT",
      ],
    },
  },
  "go-live": {
    guidelines: [
      "Streaming network uplink requires a minimum 5Mbps upload rate.",
    ],
    steps: [
      "Live streaming access channel unblocked.",
      "Stream bandwidth priority routing allocated.",
    ],
    generatedData: {
      title: "LIVE STREAM BANDWIDTH INJECTOR",
      items: ["Stream Status: UNBLOCKED", "Priority Routing Channel: #Ch-09"],
    },
  },
  "withdraw-money": {
    guidelines: [
      "Verified payment gateway linkages must use valid entity addresses.",
    ],
    steps: [
      "Payout clearing network pipeline calibrated.",
      "Withdrawal security delay lowered to instant.",
    ],
    generatedData: {
      title: "PAYOUT GATEWAY REGISTRY",
      items: [
        "Clearing Pipeline: CALIBRATED",
        "Verification Delay: INSTANT SPEED",
      ],
    },
  },
  "create-uk-account": {
    guidelines: [
      "Requires specific registration bypass vectors for absolute security.",
    ],
    steps: [
      "UK/USA server region emulator matrix deployed.",
      "Premium monetization dashboard layout initialized.",
    ],
    generatedData: {
      title: "EMULATOR REGION KEYS",
      items: [
        "Region Mapping: USA/UK Server Active",
        "Cloud Config Access: GRANTED",
      ],
    },
  },
};

export default function ToolExecutionScreen() {
  const router = useRouter();
  const { id, title } = useLocalSearchParams<{ id: string; title: string }>();

  const [phase, setPhase] = useState<
    "guidelines" | "processing" | "success" | "calculated-fun"
  >("guidelines");

  // Input Fields
  const [username, setUsername] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [candidates, setCandidates] = useState("");

  // Results State
  const [calculatedOutput, setCalculatedOutput] = useState<{
    title: string;
    items: string[];
  }>({ title: "", items: [] });
  const [progressText, setProgressText] = useState(
    "Initializing Video Ads Sync...",
  );
  const [countdown, setCountdown] = useState(30); // 30-Seconds ad timer on submit click
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const activePolicy =
    SERVICE_POLICIES[id as string] || SERVICE_POLICIES["viral-video"];

  // 1️⃣ AD TRIGGER A: Runs instantly when user clicks any card and lands here
  useEffect(() => {
    console.log(
      `[AD TRIGGER] 1st Interstitial Ad (Card Clicked) fired for node: ${id}`,
    );
  }, [id]);

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
  }, [phase]);

  // 2️⃣ Countdown ticker management for Submit Button Action
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === "processing" && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
        setProgressText(
          `Verifying Submission Node Data (${countdown}s remaining)...`,
        );
      }, 1000);
    } else if (phase === "processing" && countdown === 0) {
      finalizeProcess();
    }
    return () => clearInterval(timer);
  }, [phase, countdown]);

  // 3️⃣ AD TRIGGER B: Runs only when user fills out the form and presses submit
  const handleSystemSubmit = () => {
    // Form Input Validation Rules
    if (id === "love-calculator") {
      if (!username.trim() || !partnerName.trim())
        return alert("Please enter both Your Name and Partner's Name!");
    } else if (id === "find-partner") {
      if (!username.trim() || !candidates.trim())
        return alert("Please enter Your Name and candidate names!");
    } else {
      if (!username.trim())
        return alert("Please enter your TikTok ID / Username first!");
    }

    // Validation passes -> Start 30 seconds Submit Ad block countdown
    console.log(
      "[AD TRIGGER] 2nd Video Ad (Submit Clicked) initialization started.",
    );
    setCountdown(30);
    setPhase("processing");
    setProgressText("Verifying Submission Node Data (30s remaining)...");
  };

  const finalizeProcess = () => {
    if (id === "love-calculator") {
      const randomPercent = Math.floor(Math.random() * 35) + 65; // > 50 score guarantee
      setCalculatedOutput({
        title: "💖 COMPATIBILITY HARMONY INDEX 💖",
        items: [
          `User Node: ${username.trim().toUpperCase()}`,
          `Target Match: ${partnerName.trim().toUpperCase()}`,
          `Affection Matrix Score: ${randomPercent}%`,
          "Status Rank: Elite Cosmic Resonance Verified ✨",
        ],
      });
      setPhase("calculated-fun");
    } else if (id === "find-partner") {
      const namesArray = candidates
        .split(",")
        .map((n) => n.trim())
        .filter((n) => n.length > 0);
      const targetChosen =
        namesArray.length > 0
          ? namesArray[Math.floor(Math.random() * namesArray.length)]
          : "System Default Node";

      setCalculatedOutput({
        title: "🔍 MATCH IDENTIFICATION RESULT 🔍",
        items: [
          `Primary Owner: ${username.trim().toUpperCase()}`,
          `Perfect Vector Match: ${targetChosen.toUpperCase()}`,
          "Compatibility Lock: 100% Core Matrix Connection Approved!",
        ],
      });
      setPhase("calculated-fun");
    } else {
      setPhase("success");
    }
  };

  useEffect(() => {
    if (phase === "processing") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.12,
            duration: 750,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 750,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [phase]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* FIXED TOP HEADER CONTROLS */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => router.replace("/")}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={20} color={THEME.colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitleText}>SECURE TERMINAL</Text>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => router.replace("/")}
          activeOpacity={0.7}
        >
          <Ionicons name="home-outline" size={18} color={THEME.colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainTitleCard}>
          <Text style={styles.badgeText}>
            {id?.includes("calculator") || id?.includes("partner")
              ? "ENTERTAINMENT ALGORITHM"
              : "CORE CONTROLLER"}
          </Text>
          <Text style={styles.toolTitle}>
            {title || "Dynamic Engine Terminal"}
          </Text>
          <Text style={styles.toolSubtitle}>
            Official secure network protocol terminal v4.12
          </Text>
        </View>

        {/* PHASE 1: DYNAMIC INPUT FORMS */}
        {phase === "guidelines" && (
          <View style={styles.phaseContainer}>
            <Text style={styles.sectionTitle}>
              TERMINAL OPERATING INSTRUCTIONS
            </Text>
            {activePolicy.guidelines.map((point, index) => (
              <View key={index} style={styles.pointRow}>
                <View style={styles.bulletPoint} />
                <Text style={styles.pointText}>{point}</Text>
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
              REQUIRED SCHEMATIC CRITERIA
            </Text>

            {id === "love-calculator" && (
              <>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="user"
                    size={16}
                    color={THEME.colors.crimson}
                    style={{ marginRight: 10 }}
                  />
                  <TextInput
                    style={styles.inputField}
                    placeholder="Enter Your Full Name"
                    placeholderTextColor={THEME.colors.muted}
                    value={username}
                    onChangeText={setUsername}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="heart"
                    size={16}
                    color={THEME.colors.crimson}
                    style={{ marginRight: 10 }}
                  />
                  <TextInput
                    style={styles.inputField}
                    placeholder="Enter Partner's Name"
                    placeholderTextColor={THEME.colors.muted}
                    value={partnerName}
                    onChangeText={setPartnerName}
                  />
                </View>
              </>
            )}

            {id === "find-partner" && (
              <>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="user"
                    size={16}
                    color={THEME.colors.crimson}
                    style={{ marginRight: 10 }}
                  />
                  <TextInput
                    style={styles.inputField}
                    placeholder="Enter Your Name"
                    placeholderTextColor={THEME.colors.muted}
                    value={username}
                    onChangeText={setUsername}
                  />
                </View>
                <View
                  style={[
                    styles.inputWrapper,
                    { height: 75, alignItems: "flex-start", paddingTop: 12 },
                  ]}
                >
                  <Feather
                    name="users"
                    size={16}
                    color={THEME.colors.crimson}
                    style={{ marginRight: 10, marginTop: 2 }}
                  />
                  <TextInput
                    style={[styles.inputField, { textAlignVertical: "top" }]}
                    placeholder="Enter names to pick from (e.g. Sana, Ali, Zain)"
                    placeholderTextColor={THEME.colors.muted}
                    multiline
                    value={candidates}
                    onChangeText={setCandidates}
                  />
                </View>
              </>
            )}

            {id !== "love-calculator" && id !== "find-partner" && (
              <View style={styles.inputWrapper}>
                <Feather
                  name="at-sign"
                  size={16}
                  color={THEME.colors.crimson}
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter TikTok Username or ID"
                  placeholderTextColor={THEME.colors.muted}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={username}
                  onChangeText={setUsername}
                />
              </View>
            )}

            <TouchableOpacity
              style={styles.primaryBtn}
              activeOpacity={0.8}
              onPress={handleSystemSubmit}
            >
              <Text style={styles.btnText}>INITIALIZE PROCESS SYSTEM</Text>
              <Feather name="zap" size={16} color={THEME.colors.white} />
            </TouchableOpacity>
          </View>
        )}

        {/* PHASE 2: SUBMIT BUTTON COUNTDOWN AD OVERLAY */}
        {phase === "processing" && (
          <View style={styles.centerAnimHub}>
            <Animated.View
              style={[
                styles.statusCircle,
                {
                  transform: [{ scale: pulseAnim }],
                  borderColor: THEME.colors.crimson,
                },
              ]}
            >
              <Text
                style={{
                  color: THEME.colors.crimson,
                  fontSize: 24,
                  fontWeight: "900",
                }}
              >
                {countdown}s
              </Text>
            </Animated.View>
            <Text style={styles.progressLabel}>{progressText}</Text>
            <Text style={styles.subLoadingLabel}>
              Validating network tokens via secure sponsor server blocks.
            </Text>
          </View>
        )}

        {/* PHASE 3: FUN CALCULATOR RESULTS */}
        {phase === "calculated-fun" && (
          <View style={styles.phaseContainer}>
            <View style={styles.successHeader}>
              <View
                style={[
                  styles.successIconOuter,
                  { backgroundColor: "rgba(254, 44, 85, 0.08)" },
                ]}
              >
                <Feather
                  name={id === "love-calculator" ? "heart" : "star"}
                  size={30}
                  color={THEME.colors.crimson}
                />
              </View>
              <Text style={styles.successTitle}>ANALYSIS PHASE COMPLETE</Text>
              <Text style={styles.successSubtext}>
                Sync Node Output Metrics Generated Successfully.
              </Text>
            </View>

            <View
              style={[
                styles.dataOutputContainer,
                { borderColor: THEME.colors.crimson },
              ]}
            >
              <Text
                style={[
                  styles.dataOutputTitle,
                  { color: THEME.colors.crimson },
                ]}
              >
                {calculatedOutput.title}
              </Text>
              {calculatedOutput.items.map((item, idx) => (
                <View key={idx} style={styles.dataItemRow}>
                  <Feather
                    name="check-circle"
                    size={14}
                    color={THEME.colors.crimson}
                    style={{ marginRight: 10 }}
                  />
                  <Text
                    style={[
                      styles.pointText,
                      { color: THEME.colors.white, fontWeight: "700" },
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.primaryBtn,
                { marginTop: 30, borderColor: THEME.colors.crimson },
              ]}
              activeOpacity={0.8}
              onPress={() => router.replace("/")}
            >
              <Text style={[styles.btnText, { color: THEME.colors.crimson }]}>
                RETURN TO CONSOLE
              </Text>
              <Feather
                name="arrow-left"
                size={16}
                color={THEME.colors.crimson}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* PHASE 4: RECOVERY TOOLS SUCCESS MODULE */}
        {phase === "success" && (
          <View style={styles.phaseContainer}>
            <View style={styles.successHeader}>
              <View style={styles.successIconOuter}>
                <Feather
                  name="check-circle"
                  size={32}
                  color={THEME.colors.success}
                />
              </View>
              <Text style={styles.successTitle}>
                SYSTEM INJECTION SUCCESSFUL
              </Text>
              <Text style={styles.successSubtext}>
                Target Account: @{username.toLowerCase()}
              </Text>
            </View>

            <Text
              style={[styles.sectionTitle, { color: THEME.colors.success }]}
            >
              COMPLETED RESOLUTION STEPS
            </Text>
            {activePolicy.steps.map((step, index) => (
              <View key={index} style={styles.pointRow}>
                <Ionicons
                  name="checkmark-sharp"
                  size={16}
                  color={THEME.colors.success}
                  style={{ marginRight: 10, marginTop: 2 }}
                />
                <Text style={styles.pointText}>{step}</Text>
              </View>
            ))}

            {activePolicy.generatedData && (
              <View style={styles.dataOutputContainer}>
                <Text style={styles.dataOutputTitle}>
                  {activePolicy.generatedData.title}
                </Text>
                {activePolicy.generatedData.items.map((item, idx) => (
                  <View key={idx} style={styles.dataItemRow}>
                    <Feather
                      name={id === "trending-hashtags" ? "hash" : "terminal"}
                      size={14}
                      color={
                        id === "trending-hashtags"
                          ? THEME.colors.yellow
                          : THEME.colors.crimson
                      }
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={[
                        styles.pointText,
                        id === "trending-hashtags" && {
                          color: THEME.colors.yellow,
                          fontWeight: "700",
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            <TouchableOpacity
              style={[
                styles.primaryBtn,
                { marginTop: 30, borderColor: THEME.colors.success },
              ]}
              activeOpacity={0.8}
              onPress={() => router.replace("/")}
            >
              <Text style={[styles.btnText, { color: THEME.colors.success }]}>
                RETURN TO MAIN CONSOLE
              </Text>
              <Feather
                name="arrow-left"
                size={16}
                color={THEME.colors.success}
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* FOOTER AD BANNER */}
      <View style={styles.bottomAdBanner}>
        <View style={styles.adPlaceholderContainer}>
          <View style={styles.adBadgeMini}>
            <Text style={styles.adBadgeMiniText}>ADVERTISEMENT</Text>
          </View>
          <Text style={styles.adPlaceholderText}>
            Secure API Traffic Node Sponsorship
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },
  scrollContainer: { padding: 20, paddingTop: 25, paddingBottom: 100 },
  mainTitleCard: {
    width: "100%",
    backgroundColor: THEME.colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    alignItems: "center",
    marginBottom: 25,
  },
  badgeText: {
    fontSize: 9,
    color: THEME.colors.crimson,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  toolTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: THEME.colors.white,
    textAlign: "center",
  },
  toolSubtitle: {
    fontSize: 11,
    color: THEME.colors.muted,
    textAlign: "center",
    marginTop: 5,
  },
  phaseContainer: {
    width: "100%",
    backgroundColor: THEME.colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: THEME.colors.muted,
    letterSpacing: 1.2,
    marginBottom: 15,
  },
  pointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
    paddingRight: 10,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: THEME.colors.crimson,
    marginTop: 7,
    marginRight: 12,
  },
  pointText: { color: "#D1D1D6", fontSize: 13, lineHeight: 19, flex: 1 },
  inputWrapper: {
    width: "100%",
    minHeight: 52,
    backgroundColor: THEME.colors.bg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  inputField: {
    flex: 1,
    color: THEME.colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  primaryBtn: {
    width: "100%",
    height: 52,
    borderRadius: 10,
    backgroundColor: THEME.colors.bg,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  btnText: {
    color: THEME.colors.white,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
  },
  centerAnimHub: {
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  statusCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: THEME.colors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  subLoadingLabel: {
    fontSize: 11,
    color: THEME.colors.muted,
    textAlign: "center",
  },
  successHeader: {
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.border,
    paddingBottom: 20,
  },
  successIconOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(0, 255, 102, 0.06)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  successTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: THEME.colors.white,
    letterSpacing: 0.5,
  },
  successSubtext: {
    fontSize: 12,
    color: THEME.colors.muted,
    marginTop: 4,
    fontWeight: "600",
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
    backgroundColor: "rgba(0, 255, 102, 0.1)",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "#00FF66",
  },
  adBadgeMiniText: { color: "#00FF66", fontSize: 7, fontWeight: "900" },
  adPlaceholderText: { color: "#62626E", fontSize: 11, fontWeight: "600" },
  dataOutputContainer: {
    marginTop: 25,
    backgroundColor: "#050507",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  dataOutputTitle: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1.5,
    marginBottom: 12,
    opacity: 0.7,
  },
  dataItemRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
});
