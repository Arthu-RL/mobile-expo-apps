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
  content: {
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.spacing.sm,
  },
  textCard: {
    color: colors.gray[200],
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.bold,
  },
  transactions: {
    flex: 1,
    padding: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  heading: {
    backgroundColor: colors.blue.soft,
    padding: theme.spacing.md,
    borderRadius: 8,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
  },
  headingText: {
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
  },
});
