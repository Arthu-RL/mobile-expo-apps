import { StyleSheet } from 'react-native';
import { colors } from '../../shared/styles/color';
import { theme } from '../../shared/styles/theme';
import { stylesFonts } from '../../shared/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: theme.spacing.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  description: {
    fontFamily: stylesFonts.bold,
    fontSize: theme.typography.body.fontSize,
    color: colors.gray[500],
  },
  amount: {
    fontFamily: stylesFonts.bold,
    fontSize: theme.typography.subheading.fontSize,
    marginTop: theme.spacing.xs,
    color: colors.gray[500],
  },
  local: {
    fontFamily: stylesFonts.bold,
    fontSize: theme.typography.body.fontSize,
    marginTop: theme.spacing.xs,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
  },
  category: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.gray[500],
  },
  date: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.gray[500],
  },
});
