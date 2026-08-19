import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

const BEAT_COUNT = 4;

type BeatIndicatorProps = {
  bpm: number;
  isPlaying: boolean;
};

export const BeatIndicator = ({ bpm, isPlaying }: BeatIndicatorProps) => {
  if (!isPlaying) {
    return <BeatDots accessibilityLabel="Metronome paused" activeBeat={null} />;
  }

  return <PlayingBeatIndicator bpm={bpm} />;
};

const PlayingBeatIndicator = ({ bpm }: Pick<BeatIndicatorProps, "bpm">) => {
  const [activeBeat, setActiveBeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBeat((beat) => (beat + 1) % BEAT_COUNT);
    }, 60_000 / bpm);

    return () => clearInterval(interval);
  }, [bpm]);

  return (
    <BeatDots
      accessibilityLabel={`Playing, beat ${activeBeat + 1} of ${BEAT_COUNT}`}
      activeBeat={activeBeat}
    />
  );
};

type BeatDotsProps = {
  accessibilityLabel: string;
  activeBeat: number | null;
};

const BeatDots = ({ accessibilityLabel, activeBeat }: BeatDotsProps) => {
  const theme = useTheme();

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessible
      style={styles.container}
    >
      {Array.from({ length: BEAT_COUNT }, (_, beat) => (
        <View
          key={beat}
          style={[
            styles.beat,
            {
              backgroundColor:
                beat === activeBeat
                  ? theme.colors.primary
                  : theme.colors.surfaceVariant,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },

  beat: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#D1D5DB",
  },
});
