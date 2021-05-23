import * as React from "react";
import { Text } from "@ui-kitten/components/ui/text/text.component";
import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Color } from "../../../constants/Color";
interface AppProps {
  whiteColor?: boolean;
}

export const SubHeader: React.FC<AppProps> = (props) => {
  const theme = useTheme();
  return (
    <Text
      category="s1"
      style={{
        color: theme[props.whiteColor ? Color.TEXT.WHITE : Color.TEXT.PRIMARY],
      }}
    >
      {props?.children}
    </Text>
  );
};
