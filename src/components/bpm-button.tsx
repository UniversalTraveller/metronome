import { Button, Host } from "@expo/ui";
import { StyleSheet } from "react-native";

type BpmButtonProps = {
  disabled?: boolean;
  label: string;
  onPress: () => void;
};

export const BpmButton = ({ disabled, label, onPress }: BpmButtonProps) => {
  return (
    <Host matchContents style={styles.host}>
      <Button disabled={disabled} label={label} onPress={onPress} />
    </Host>
  );
};

const styles = StyleSheet.create({
  host: {
    marginHorizontal: 6,
  },
});
