import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image as ExpoImage } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";

import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();
  const [, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleEventPress = (eventId: string) => {
    (router as any).push(`/event/${eventId}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1628" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerIcons}></View>
        </View>

        <View style={styles.headerMiddle}>
          <View style={styles.logoContainer}>
            <ExpoImage
              source={require("../../assets/images/logo.png")}
              style={styles.logoImage}
            />
          </View>
          <TouchableOpacity style={styles.cartButton}>
            <IconSymbol name="cart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Banner */}
        <View style={styles.heroContainer}>
          <ExpoImage
            source={require("../../assets/images/mulher.png")}
            style={styles.heroImage}
          />
        </View>

        {/* Eventim BR Pass Banner */}
        <View style={styles.heroContainer}>
          <ExpoImage
            source={require("../../assets/images/ticket.png")}
            style={styles.heroImage}
          />
        </View>

        {/* Destaque Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
            contentContainerStyle={styles.carouselContent}
          >
            {/* Ed Sheeran Card */}
            <TouchableOpacity
              style={styles.highlightCard}
              onPress={() => handleEventPress("2")}
              activeOpacity={0.8}
            >
              <ExpoImage
                source={require("../../assets/images/lop.jpg")}
                style={styles.cardImage}
              />
            </TouchableOpacity>

            {/* Hayley Williams Card */}
            <TouchableOpacity
              style={styles.highlightCard}
              onPress={() => handleEventPress("3")}
              activeOpacity={0.8}
            >
              <ExpoImage
                source={require("../../assets/images/the.jpg")}
                style={styles.cardImage}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1628",
  },
  header: {
    backgroundColor: "#0A1628",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 8,
  },
  headerMiddle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: -180,
  },
  logoImage: {
    width: 480,
    height: 100,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },
  cartButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
  },
  heroContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    height: 200,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  ticketImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    marginBottom: 8,
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    justifyContent: "flex-end",
  },
  heroTextBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 16,
  },
  heroTextSmall: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  heroTextMedium: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  heroTextLarge: {
    fontSize: 20,
    fontWeight: "800",
    color: "#333",
  },
  passBanner: {
    marginHorizontal: 16,
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passCutout: {
    position: "absolute",
    left: -12,
    top: "50%",
    transform: [{ translateY: -12 }],
    width: 24,
    height: 24,
    backgroundColor: "#0A1628",
    borderRadius: 12,
  },
  passContent: {
    flex: 1,
    marginLeft: 16,
  },
  passLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  passLogoText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  passSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  carousel: {
    marginBottom: 8,
  },
  carouselContent: {
    gap: 12,
    paddingHorizontal: 20,
  },
  highlightCard: {
    width: 280,
    height: 280,
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  highlightCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  highlightCardSubtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  highlightCardArtist: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
  },
});