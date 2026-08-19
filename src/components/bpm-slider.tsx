import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

type BpmSliderProps = {
  max: number;
  min: number;
  onValueChange: (value: number) => void;
  value: number;
};

export const BpmSlider = ({
  max,
  min,
  onValueChange,
  value,
}: BpmSliderProps) => {
  const theme = useTheme();

  return (
    <Slider
      accessibilityLabel="Tempo"
      maximumTrackTintColor={theme.colors.surfaceVariant}
      maximumValue={max}
      minimumTrackTintColor={theme.colors.primary}
      minimumValue={min}
      onValueChange={onValueChange}
      step={1}
      style={styles.slider}
      thumbTintColor={theme.colors.primary}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "100%",
  },
});
