import * as React from "react";
import { View, Text } from "react-native";
import { Circle } from "./Circle.component";

export interface UserAmountProps {
  nbrUsers: number;
  limit: number;
}

export function UserAmount(props: UserAmountProps) {
  const usersLeft = props.limit - props.nbrUsers;

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <Text>
        <View>
          <Text> Add </Text>
        </View>
        <Circle text={usersLeft.toString()} />
        <View>
          <Text> more {usersLeft > 1 ? "users" : "user"}</Text>
        </View>
      </Text>
    </View>
  );
}
