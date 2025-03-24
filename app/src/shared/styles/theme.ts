import { Dimensions } from "react-native";
import { colors } from "../../shared/styles/color";

const { width, height } = Dimensions.get("window");
const baseSize = Math.min(width, height);

export const theme = {
  screen: {
    width: width,
    height: height,
  },
  spacing: {
    xs: baseSize * 0.01, // 1% of the smaller screen dimension
    sm: baseSize * 0.02, // 2% of the smaller screen dimension
    md: baseSize * 0.03, // 3% of the smaller screen dimension
    lg: baseSize * 0.05, // 5% of the smaller screen dimension
    xl: baseSize * 0.08, // 8% of the smaller screen dimension
    // Way to generate custom spacing
    scale: (factor: number) => baseSize * (factor * 0.01),
  },
  typography: {
    // Make font sizes responsive too
    heading: {
      fontFamily: "Rubik_600SemiBold",
      fontSize: baseSize * 0.06, // 6% of the screen's smaller dimension
      letterSpacing: -0.5,
    },
    subheading: {
      fontFamily: "Rubik_500Medium",
      fontSize: baseSize * 0.045, // 4.5% of the screen's smaller dimension
    },
    body: {
      fontFamily: "Rubik_400Regular",
      fontSize: baseSize * 0.04, // 4% of the screen's smaller dimension
    },
    caption: {
      fontFamily: "Rubik_400Regular",
      fontSize: baseSize * 0.035, // 3.5% of the screen's smaller dimension
      color: colors.green.dark,
    },
    // way to generate custom font sizes
    scale: (factor: number) => baseSize * (factor * 0.01),
  },
};
