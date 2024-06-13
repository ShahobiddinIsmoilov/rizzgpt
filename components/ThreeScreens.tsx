import { View, Image } from "react-native";
import React from "react";
import Screen1 from "../assets/rizzgpt/screen1.png";
import Screen2 from "../assets/rizzgpt/screen2.png";
import Screen3 from "../assets/rizzgpt/screen3.png";

export default function ThreeScreens() {
  return (
    <View className="my-20 flex-row justify-center">
      <View className="border-2 border-white/50 w-[129] h-[278] rounded-xl overflow-hidden -rotate-[15deg] z-10">
        <Image
          source={Screen3}
          className="w-[129] h-[278] border border-white"
        />
      </View>
      <View className="border-2 border-white/50 w-[129] h-[278] rounded-xl overflow-hidden -ml-14 -mt-[14px] z-20">
        <Image
          source={Screen2}
          className="w-[129] h-[278] border border-white"
        />
      </View>
      <View className="border-2 border-white/50 w-[129] h-[278] rounded-xl overflow-hidden rotate-[15deg] -ml-14 z-30">
        <Image
          source={Screen1}
          className="w-[129] h-[278] border border-white"
        />
      </View>
    </View>
  );
}
