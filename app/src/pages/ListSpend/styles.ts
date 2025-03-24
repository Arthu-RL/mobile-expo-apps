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
    padding: theme.spacing.md,
    borderRadius: 8,
    marginBottom: theme.spacing.lg,
    alignItems: "center",
  },
  headingText: {
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
    color: colors.green.dark,
  },
  card: {
    flex: 1,
    marginBottom: theme.spacing.md,
  },
  listContainer: {
    paddingBottom: theme.spacing.md,
  },
  spendCard: {
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    shadowColor: colors.gray[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  descriptionText: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.green.dark,
    marginBottom: theme.spacing.xs,
  },
  valueText: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.green.base,
  },
  detailRow: {
    flexDirection: "row",
    marginTop: theme.spacing.xs,
  },
  detailLabel: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.gray[500],
    width: 80,
  },
  detailText: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[500],
    flex: 1,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: theme.spacing.xl,
  },
  emptyListText: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[400],
    textAlign: "center",
  },
});
