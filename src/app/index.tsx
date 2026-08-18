import { BeatIndicator } from "@/components/beat-indicator";
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
      <BeatIndicator bpm={bpm} />

      <View style={styles.bpmRow}>
        <BpmButton
          disabled={bpm <= MIN_BPM}
          label="−"
          onPress={() => setBpm((prev) => Math.max(prev - 1, MIN_BPM))}
        />

        <BpmDisplay value={bpm} />

        <BpmButton
          disabled={bpm >= MAX_BPM}
          label="+"
          onPress={() => setBpm((prev) => Math.min(prev + 1, MAX_BPM))}
        />
      </View>

      <View style={styles.sliderRow}>
        <BpmSlider
          max={MAX_BPM}
          min={MIN_BPM}
          onValueChange={setBpm}
          value={bpm}
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

  sliderRow: {
    flexDirection: "row",
  },

  bpmRow: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 32,
  },
});
