import { Text } from "react-native";
import React from "react";

interface Props {
  color: string;
}

export default function RizzText({ color }: Props) {
  return (
    <Text
      style={{ fontFamily: "SyncopateBold" }}
      className={`text-4xl text-center text-[${color}]`}
    >
      RIZZGPT
    </Text>
  );
}
