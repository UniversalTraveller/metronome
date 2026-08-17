import { Button, Host, Slider } from "@expo/ui";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const MIN_BPM = 40;
const MAX_BPM = 240;

export default function Index() {
  const [bpm, setBpm] = useState<number>(120);

  return (
    <View style={styles.container}>
      <Text style={styles.bpmDisplay}>{bpm}</Text>

      <View style={styles.controls}>
        <Host matchContents style={styles.buttonHost}>
          <Button
            disabled={bpm <= MIN_BPM}
            label="−"
            onPress={() => setBpm((prev) => Math.max(prev - 1, MIN_BPM))}
          />
        </Host>

        <Host style={styles.sliderHost}>
          <Slider
            value={bpm}
            onValueChange={(value) => setBpm(value)}
            step={1}
            min={MIN_BPM}
            max={MAX_BPM}
          />
        </Host>

        <Host matchContents style={styles.buttonHost}>
          <Button
            disabled={bpm >= MAX_BPM}
            label="+"
            onPress={() => setBpm((prev) => Math.min(prev + 1, MAX_BPM))}
          />
        </Host>
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
  bpmDisplay: {
    fontSize: 48,
  },
  buttonHost: {
    marginHorizontal: 6,
  },
  sliderHost: {
    flex: 1,
  },
});
