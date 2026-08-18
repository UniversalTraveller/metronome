import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const BEAT_COUNT = 4;

type BeatIndicatorProps = {
  bpm: number;
};

export function BeatIndicator({ bpm }: BeatIndicatorProps) {
  const [activeBeat, setActiveBeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBeat((beat) => (beat + 1) % BEAT_COUNT);
    }, 60_000 / bpm);

    return () => clearInterval(interval);
  }, [bpm]);

  return (
    <View
      accessibilityLabel={`Beat ${activeBeat + 1} of ${BEAT_COUNT}`}
      accessible
      style={styles.container}
    >
      {Array.from({ length: BEAT_COUNT }, (_, beat) => (
        <View
          key={beat}
          style={[styles.beat, beat === activeBeat && styles.activeBeat]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 32,
    marginTop: 24,
  },

  beat: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#D1D5DB",
  },

  activeBeat: {
    backgroundColor: "#0A84FF",
  },
});
