import { Dimensions } from 'react-native';
import { colors } from '../../shared/styles/color';
import { stylesFonts } from '../fonts/fonts';

const { width, height } = Dimensions.get('window');
export const baseSize = Math.min(width, height);

export const theme = {
  screen: {
    width: width,
    height: height,
  },
  spacing: {
    xs: baseSize * 0.01,
    sm: baseSize * 0.02,
    md: baseSize * 0.03,
    lg: baseSize * 0.05,
    xl: baseSize * 0.08,
    // Way to generate custom spacing
    scale: (factor: number) => baseSize * (factor * 0.01),
  },
  typography: {
    heading: {
      fontFamily: stylesFonts.semiBold,
      fontSize: baseSize * 0.06,
      letterSpacing: -0.5,
    },
    subheading: {
      fontFamily: stylesFonts.medium,
      fontSize: baseSize * 0.045,
    },
    body: {
      fontFamily: stylesFonts.regular,
      fontSize: baseSize * 0.04,
    },
    caption: {
      fontFamily: stylesFonts.regular,
      fontSize: baseSize * 0.035,
      color: colors.blue.dark,
    },
  },
};
