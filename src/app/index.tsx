import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [bpm, setBpm] = useState<number>(120);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setBpm((prev) => prev - 1)}>
        <Text style={styles.button}>-</Text>
      </Pressable>

      <Text style={styles.bpmDisplay}>{bpm}</Text>
      <Pressable onPress={() => setBpm((prev) => prev + 1)}>
        <Text style={styles.button}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bpmDisplay: {
    fontSize: 48,
    marginHorizontal: 20,
  },
  button: {
    fontSize: 24,
    marginHorizontal: 10,
  },
});
