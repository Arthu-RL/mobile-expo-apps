import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Routes } from "./src/routes";
import { useFonts } from "@expo-google-fonts/rubik";
import { fonts } from "./src/shared/fonts/fonts";
import { colors } from "./src/shared/styles/color";
import { styles } from "./global/styles";
import { StatusBar } from "expo-status-bar";
import { theme } from "./src/shared/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.green.soft} />
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.green.light} translucent />
      <View
        style={{
          height: theme.spacing.md,
          backgroundColor: colors.gray[300],
        }}
      />
      <View style={styles.routes}>
        <Routes />
      </View>
    </View>
  );
}
