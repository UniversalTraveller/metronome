import { Host, Slider } from "@expo/ui";
import { StyleSheet } from "react-native";

type BpmSliderProps = {
  max: number;
  min: number;
  onValueChange: (value: number) => void;
  value: number;
};

export function BpmSlider({ max, min, onValueChange, value }: BpmSliderProps) {
  return (
    <Host style={styles.host}>
      <Slider
        max={max}
        min={min}
        onValueChange={onValueChange}
        step={1}
        value={value}
      />
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    flex: 1,
  },
});
