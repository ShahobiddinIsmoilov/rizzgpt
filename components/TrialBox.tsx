import { Link } from "expo-router";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import GradientText from "@/components/GradientText";

export default function TrialBox() {
  return (
    <View className="flex items-center rounded-3xl bg-[#363636] border-4 border-button mb-16">
      <LinearGradient
        colors={["#00a676", "#43b1c6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="px-4 py-1 rounded-full -translate-y-[20px]"
      >
        <Text className="text-white font-bold text-lg">Rizz God</Text>
      </LinearGradient>
      <GradientText text="Elevate Your Game" style="text-3xl bg-transparent" />
      <Link
        href="/upload"
        className="bg-button rounded-full py-4 px-10 my-4 text-white text-2xl font-bold text-center"
      >
        <Text style={{ fontFamily: "RobotoBold" }}>Unlock Free Trial</Text>
      </Link>
      <Text
        style={{ fontFamily: "RobotoThin" }}
        className="text-white/75 text-center text-lg mb-8"
      >
        risk-free trial then $8.67/week
      </Text>
    </View>
  );
}
