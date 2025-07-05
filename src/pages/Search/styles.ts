import { StyleSheet } from 'react-native';
import { colors } from '../../shared/styles/color';
import { theme } from '../../shared/styles/theme';
import { stylesFonts } from '../../shared/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    padding: theme.spacing.md,
  },
  heading: {
    backgroundColor: colors.blue.soft,
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
    padding: theme.spacing.md,
    borderRadius: 8,
    color: colors.blue.dark,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  headingText: {
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
  },
  searchSection: {
    backgroundColor: colors.blue.soft,
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.blue.base,
    marginBottom: theme.spacing.md,
  },
  inputLabel: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.blue.dark,
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
    backgroundColor: colors.blue.base,
    borderRadius: 8,
    padding: theme.spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.xs,
  },
  searchBtnText: {
    fontFamily: stylesFonts.semiBold,
    fontSize: theme.typography.body.fontSize,
    color: colors.gray[100],
  },
  resultContainer: {
    backgroundColor: colors.blue.soft,
    borderRadius: 8,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  resultTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.blue.dark,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  noResultText: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[400],
    textAlign: 'center',
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
    color: colors.blue.dark,
    marginBottom: theme.spacing.xs,
  },
  itemValue: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.blue.base,
    marginBottom: theme.spacing.xs,
  },
  itemDetail: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[500],
  },
});
