import { IconButton } from "react-native-paper";

type BpmButtonProps = {
  disabled?: boolean;
  icon: "minus" | "plus";
  onPress: () => void;
};

export const BpmButton = ({ disabled, icon, onPress }: BpmButtonProps) => {
  return (
    <IconButton
      accessibilityLabel={
        icon === "minus" ? "Decrease tempo" : "Increase tempo"
      }
      disabled={disabled}
      icon={icon}
      mode="contained"
      onPress={onPress}
      size={24}
    />
  );
};
