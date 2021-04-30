import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface UserAmountProps {
  nbrUsers: number;
  limit: number;
}

export function UserAmount(props: UserAmountProps) {
  const usersLeft = props.limit - props.nbrUsers;
  const theme = useTheme();

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <Text>
        <View>
          <Text> Add </Text>
        </View>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: theme["color-primary-default"],
              borderColor: theme["color-primary-default"],
            },
          ]}
        >
          <Text style={{ color: theme["text-alternate-color"] }}>
            {usersLeft}
          </Text>
        </View>
        <View>
          <Text> more {usersLeft > 1 ? "users" : "user"}</Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
  },
});
