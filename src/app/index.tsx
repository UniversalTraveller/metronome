import { BeatIndicator } from "@/components/beat-indicator";
import { BpmButton } from "@/components/bpm-button";
import { BpmDisplay } from "@/components/bpm-display";
import { BpmSlider } from "@/components/bpm-slider";
import { PlayPauseButton } from "@/components/play-pause-button";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const MIN_BPM = 40;

const MAX_BPM = 240;

const Index = () => {
  const [bpm, setBpm] = useState<number>(120);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Surface elevation={0} style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.beatIndicatorContainer}>
          <BeatIndicator bpm={bpm} isPlaying={isPlaying} />
        </View>

        <View style={styles.controlsMiddle}>
          <PlayPauseButton
            isPlaying={isPlaying}
            onPress={() => setIsPlaying((playing) => !playing)}
          />
        </View>

        <View style={styles.controlsBottom}>
          <View style={styles.sliderRow}>
            <BpmSlider
              max={MAX_BPM}
              min={MIN_BPM}
              onValueChange={setBpm}
              value={bpm}
            />
          </View>

          <View style={styles.bpmRow}>
            <BpmButton
              disabled={bpm <= MIN_BPM}
              icon="minus"
              onPress={() => setBpm((prev) => Math.max(prev - 1, MIN_BPM))}
            />

            <BpmDisplay value={bpm} />

            <BpmButton
              disabled={bpm >= MAX_BPM}
              icon="plus"
              onPress={() => setBpm((prev) => Math.min(prev + 1, MAX_BPM))}
            />
          </View>
        </View>
      </SafeAreaView>
    </Surface>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },

  beatIndicatorContainer: {
    paddingTop: 36,
  },

  controlsMiddle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    maxWidth: 440,
    width: "100%",
  },

  controlsBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    maxWidth: 440,
    width: "100%",
  },

  sliderRow: {
    flexDirection: "row",
    width: "100%",
  },

  bpmRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Index;
