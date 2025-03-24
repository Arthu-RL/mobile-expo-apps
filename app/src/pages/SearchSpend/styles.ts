import { StyleSheet } from "react-native";
import { colors } from "../../shared/styles/color";
import { theme } from "../../shared/styles/theme";
import { stylesFonts } from "../../shared/fonts/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    padding: theme.spacing.md,
  },
  heading: {
    backgroundColor: colors.green.soft,
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
    padding: theme.spacing.md,
    borderRadius: 8,
    color: colors.green.dark,
    textAlign: "center",
    marginBottom: theme.spacing.lg,
  },
  headingText: {
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
    color: colors.green.dark,
    margin: theme.spacing.md,
  },
  searchSection: {
    backgroundColor: colors.green.soft,
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.green.base,
    marginBottom: theme.spacing.md,
  },
  inputLabel: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.green.dark,
    marginBottom: theme.spacing.xs,
  },
  input: {
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    fontFamily: stylesFonts.regular,
    fontSize: theme.typography.body.fontSize,
  },
  inputContainer: {
    marginBottom: theme.spacing.md,
  },
  searchBtn: {
    backgroundColor: colors.green.base,
    borderRadius: 8,
    padding: theme.spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.sm,
  },
  searchBtnText: {
    fontFamily: stylesFonts.semiBold,
    fontSize: theme.typography.body.fontSize,
    color: colors.gray[100],
  },
  resultContainer: {
    marginTop: theme.spacing.xl,
  },
  resultTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.green.dark,
    marginBottom: theme.spacing.md,
  },
  noResultText: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[400],
    textAlign: "center",
    padding: theme.spacing.lg,
  },
  searchResultItem: {
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  itemDescription: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.green.dark,
    marginBottom: theme.spacing.xs,
  },
  itemValue: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.green.base,
    marginBottom: theme.spacing.xs,
  },
  itemDetail: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[500],
  },
});
