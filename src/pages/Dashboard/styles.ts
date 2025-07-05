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
    fontSize: theme.typography.heading.fontSize,
    fontFamily: stylesFonts.semiBold,
    backgroundColor: colors.blue.soft,
    padding: theme.spacing.md,
    borderRadius: 8,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  headingText: {
    fontSize: theme.typography.heading.fontSize,
    margin: theme.spacing.md,
    textAlign: 'center',
    fontFamily: stylesFonts.semiBold,
  },
  formContainer: {
    marginBottom: theme.spacing.xl,
  },
  inputContainer: {
    marginBottom: theme.spacing.md,
  },
  inputLabel: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: theme.typography.caption.color,
    marginBottom: theme.spacing.xs,
  },
  buttonContainer: {
    marginTop: theme.spacing.md,
    borderRadius: 8,
    backgroundColor: colors.blue.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.red.base,
    marginTop: theme.spacing.xs,
  },
  sectionTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.medium,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  fieldGroup: {
    backgroundColor: colors.gray[200],
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  scrollViewContent: {
    paddingBottom: theme.spacing.xl,
  },
});
