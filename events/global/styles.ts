import { StyleSheet } from "react-native";
import { colors } from "../src/shared/styles/color";
import { theme } from "../src/shared/styles/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    width: theme.screen.width,
    height: theme.screen.height,
    flex: 1,
    backgroundColor: colors.gray[200],
    fontFamily: theme.typography.body.fontFamily,
    fontSize: theme.typography.body.fontSize,
  },
  routes: {
    flex: 1,
    backgroundColor: colors.gray[200],
    fontFamily: theme.typography.caption.fontFamily,
    fontSize: theme.typography.caption.fontSize,
    color: theme.typography.caption.color,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[200],
    padding: theme.spacing.xl,
    fontFamily: theme.typography.body.fontFamily,
    fontSize: theme.typography.body.fontSize,
  },
  loadingText: {
    backgroundColor: colors.gray[200],
    marginTop: theme.spacing.md,
    fontFamily: theme.typography.heading.fontFamily,
    fontSize: theme.typography.heading.fontSize,
  },
});
