// Screenshot Preview Screen
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import GoBack from "../../assets/rizzgpt/goback.svg";
import Plus from "../../assets/rizzgpt/plus.svg";
import Copy from "../../assets/rizzgpt/copy.svg";
import React from "react";
import RizzText from "@/components/RizzText";

export default function ScreenshotScreen() {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#e62079", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="h-[calc(20%)]"
      >
        <View className="mt-24 mb-8 mx-8">
          <View className="flex-row justify-between items-center">
            <Link href="./screenshotList">
              <GoBack width={30} height={30} color="white" />
            </Link>
            <RizzText color="#ffffff" />
            <Plus width={30} height={30} />
          </View>
          <View className="bg-white rounded-2xl mt-12">
            <Text className="text-black text-4xl text-center py-64">
              User's screenshot
            </Text>
          </View>
          <Text
            style={{ fontFamily: "RobotoLight" }}
            className="text-white text-2xl mt-8"
          >
            Tap to copy rizz
          </Text>
          <View className="bg-[#e0e0e0] rounded-2xl mt-10 flex-row justify-between items-center px-4 py-6">
            <Text className="text-black text-2xl w-[calc(80%)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quis est ut dui faucibus dapibus nec vel erat.
            </Text>
            <View className="flex items-center">
              <Copy height={36} width={36} color="black" />
              <Text>copy</Text>
            </View>
          </View>
          <View className="relative mt-8">
            <Link
              href="/screenshot"
              className="top-0 left-0 bg-button rounded-2xl py-4 px-5"
            >
              <Text
                style={{ fontFamily: "RobotoBold" }}
                className="absolute text-white text-2xl font-bold"
              >
                Generate more
              </Text>
            </Link>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
