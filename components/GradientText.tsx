import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";

interface Props {
  text: string; // Text to which the gradient will be applied
  style: string; // Tailwind styles to apply to text
}

export default function GradientText({ text, style }: Props) {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{ fontFamily: "RobotoBlack" }}
          className={`${style} bg-transparent`}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#ffffff", "#43b1c6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={{ fontFamily: "RobotoBlack" }}
          className={`${style} opacity-0`}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
