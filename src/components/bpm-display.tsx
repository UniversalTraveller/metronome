import { StyleSheet, Text } from "react-native";

type BpmDisplayProps = {
  value: number;
};

export const BpmDisplay = ({ value }: BpmDisplayProps) => {
  return (
    <Text accessibilityLabel={`${value} beats per minute`} style={styles.text}>
      {value}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
