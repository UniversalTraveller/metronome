import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet } from "react-native";

type PlayPauseButtonProps = {
  isPlaying: boolean;
  onPress: () => void;
};

export const PlayPauseButton = ({
  isPlaying,
  onPress,
}: PlayPauseButtonProps) => {
  return (
    <Pressable
      accessibilityLabel={isPlaying ? "Pause metronome" : "Play metronome"}
      accessibilityRole="button"
      hitSlop={8}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <SymbolView
        name={{
          android: isPlaying ? "pause" : "play_arrow",
          ios: isPlaying ? "pause.fill" : "play.fill",
          web: isPlaying ? "pause" : "play_arrow",
        }}
        size={30}
        tintColor="#fff"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#0A84FF",
    borderRadius: 32,
    height: 64,
    justifyContent: "center",
    width: 64,
  },

  pressed: {
    opacity: 0.7,
  },
});
