import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

type PlayPauseButtonProps = {
  isPlaying: boolean;
  onPress: () => void;
};

export const PlayPauseButton = ({
  isPlaying,
  onPress,
}: PlayPauseButtonProps) => {
  return (
    <IconButton
      accessibilityLabel={isPlaying ? "Pause metronome" : "Play metronome"}
      animated
      icon={isPlaying ? "pause" : "play"}
      mode="contained"
      onPress={onPress}
      size={32}
      style={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    height: 64,
    margin: 0,
    width: 64,
  },
});
