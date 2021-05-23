import * as React from "react";
import { View, Text } from "react-native";
import { Circle } from "./Circle.component";
import { Paragraph } from "./Paragraph/Paragraph.component";

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
          <Paragraph> Add </Paragraph>
        </View>
        <Circle text={usersLeft.toString()} />
        <View>
          <Paragraph> more {usersLeft > 1 ? "users" : "user"}</Paragraph>
        </View>
      </Text>
    </View>
  );
}
