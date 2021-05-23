import * as React from "react";
import { Text } from "@ui-kitten/components/ui/text/text.component";
import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Color } from "../../constants/Color";
interface AppProps {}

export const SubtitleHeader: React.FC<AppProps> = (props) => {
  const theme = useTheme();
  return (
    <Text category="s1" style={{ color: theme[Color.BLACK_TEXT] }}>
      {props?.children}
    </Text>
  );
};
