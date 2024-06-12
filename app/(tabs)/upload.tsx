// Upload Screenshot Page
import { Image, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import React from "react";
import RizzFont from "../../assets/fonts/rizzfont.png";
import Screen1 from "../../assets/rizzgpt/screen1.png";
import Screen2 from "../../assets/rizzgpt/screen2.png";
import Screen3 from "../../assets/rizzgpt/screen3.png";

const Upload = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#e62079", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.6 }}
        className="h-[calc(50%)]"
      >
        <View className="mt-24">
          <View className="flex justify-center items-center">
            <Image source={RizzFont} className="w-52 h-7" />
          </View>
          <Text className="text-white text-3xl text-center mt-32 mx-16">
            Upload a screenshot of a chat or bio
          </Text>
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
          <Link
            onPress={() => router.push("./screenshotList")}
            href="/screenshot"
            className="bg-[#00a676] rounded-full py-4 text-white text-2xl font-bold text-center mx-8 shadow-lg shadow-[#00a676]"
          >
            <Text>Upload Screenshot</Text>
          </Link>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Upload;
