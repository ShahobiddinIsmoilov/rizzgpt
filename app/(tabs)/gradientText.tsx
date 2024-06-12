// Couldn't get gradient masking to work to create gradient texts
// because I was in a hurry
import React from "react";
import { StyleSheet, View, TextStyle } from "react-native";
import Svg, { Defs, Mask, Rect, Text as SvgText } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

interface GradientTextProps {
  text: string;
  style?: TextStyle;
  colors: string[];
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  style = {},
  colors,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFillObject}
      />
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <Mask id="mask" x="0" y="0" width="100%" height="100%">
            <Rect height="100%" width="100%" fill="white" />
            <SvgText
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={style.fontSize || 40}
              fontWeight={style.fontWeight || "bold"}
              fill="black"
            >
              {text}
            </SvgText>
          </Mask>
        </Defs>
        <Rect height="100%" width="100%" fill="black" mask="url(#mask)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
});

export default GradientText;
