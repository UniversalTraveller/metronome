import { StyleSheet, Text, View } from "react-native";

type BpmDisplayProps = {
  value: number;
};

export const BpmDisplay = ({ value }: BpmDisplayProps) => {
  return (
    <View
      accessibilityLabel={`${value} beats per minute`}
      accessible
      style={styles.container}
    >
      <Text style={[styles.text, styles.value]}>{value}</Text>

      <Text style={[styles.text, styles.label]}>BPM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "baseline",
    flexDirection: "row",
  },

  text: {
    fontSize: 36,
    lineHeight: 52,
  },

  value: {
    fontVariant: ["tabular-nums"],
    textAlign: "right",
    width: 70,
  },

  label: {
    fontSize: 18,
    marginLeft: 8,
  },
});
