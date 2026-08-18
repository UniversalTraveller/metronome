import { BpmButton } from "@/components/bpm-button";
import { BpmDisplay } from "@/components/bpm-display";
import { BpmSlider } from "@/components/bpm-slider";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const MIN_BPM = 40;
const MAX_BPM = 240;

export default function Index() {
  const [bpm, setBpm] = useState<number>(120);

  return (
    <View style={styles.container}>
      <BpmDisplay value={bpm} />

      <View style={styles.controls}>
        <BpmButton
          disabled={bpm <= MIN_BPM}
          label="−"
          onPress={() => setBpm((prev) => Math.max(prev - 1, MIN_BPM))}
        />

        <BpmSlider
          max={MAX_BPM}
          min={MIN_BPM}
          onValueChange={setBpm}
          value={bpm}
        />

        <BpmButton
          disabled={bpm >= MAX_BPM}
          label="+"
          onPress={() => setBpm((prev) => Math.min(prev + 1, MAX_BPM))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
