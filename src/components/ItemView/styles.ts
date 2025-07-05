import { StyleSheet } from 'react-native';
import { colors } from '../../shared/styles/color';
import { theme, baseSize } from '../../shared/styles/theme';
import { stylesFonts } from '../../shared/fonts/fonts';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: theme.spacing.md,
  },
  spendCard: {
    backgroundColor: colors.gray[300],
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: theme.spacing.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
    paddingBottom: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  cardContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1.5,
    marginRight: 10,
  },
  cardSalary: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.blue.soft,
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
  },
  descriptionText: {
    maxWidth: baseSize * 0.45,
    fontSize: theme.typography.subheading.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.gray[500],
    marginBottom: theme.spacing.xs,
  },
  valueText: {
    maxWidth: baseSize * 0.45,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.blue.base,
    marginBottom: 2,
  },
  alertValueText: {
    maxWidth: baseSize * 0.45,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.bold,
    color: colors.red.bright,
    marginBottom: 2,
  },
  detailRow: {
    maxWidth: baseSize * 0.7,
    flexDirection: 'row',
    marginTop: theme.spacing.xs,
  },
  detailLabel: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.medium,
    color: colors.gray[500],
  },
  detailText: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: stylesFonts.regular,
    color: colors.gray[500],
    flex: 1,
  },
  delButton: {
    width: baseSize * 0.075,
    height: baseSize * 0.075,
    borderRadius: theme.spacing.xl,
    backgroundColor: colors.gray[500],
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3,
    // elevation: 5,
    // alignSelf: 'flex-end',
  },
});
