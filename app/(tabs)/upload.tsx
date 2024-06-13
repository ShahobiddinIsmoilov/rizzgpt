// Upload Screenshot Screen
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import React from "react";
import ThreeScreens from "@/components/ThreeScreens";
import RizzText from "@/components/RizzText";

export default function UploadScreen() {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#e62079", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.3 }}
      >
        <View className="mt-24 mb-8 mx-8">
          <RizzText color="#ffffff" />
          <Text
            style={{ fontFamily: "RobotoLight" }}
            className="text-white text-3xl text-center mx-8 mt-24"
          >
            Upload a screenshot of a chat or bio
          </Text>
          <ThreeScreens />
          <Link
            onPress={() => router.push("./screenshotList")}
            href="/screenshot"
            className="bg-button rounded-full py-4 text-white text-2xl font-bold text-center shadow-lg shadow-[#00a676]"
          >
            <Text style={{ fontFamily: "RobotoBold" }}>Upload Screenshot</Text>
          </Link>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
