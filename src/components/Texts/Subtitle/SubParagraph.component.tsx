import * as React from "react";
import { Text } from "@ui-kitten/components/ui/text/text.component";
import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Color } from "../../../constants/Color";
interface AppProps {}

export const SubParagraph: React.FC<AppProps> = (props) => {
  const theme = useTheme();
  return (
    <Text category="s2" style={{ color: theme[Color.TEXT.BLACK] }}>
      {props?.children}
    </Text>
  );
};
