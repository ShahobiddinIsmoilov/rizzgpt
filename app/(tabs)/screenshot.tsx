// Screenshot Preview Page
import { ScrollView, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import RizzFont from "../../assets/fonts/rizzfont.png";
import GoBack from "../../assets/rizzgpt/goback_white.svg";
import Plus from "../../assets/rizzgpt/plus.svg";
import Copy from "../../assets/rizzgpt/copy.svg";
import React from "react";

const Upload = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#e62079", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="h-[calc(20%)]"
      >
        <View className="mt-24 mx-8">
          <View className="flex-row justify-between items-center">
            <Link href="./screenshotList">
              <GoBack width={32} height={32} />
            </Link>
            <View className="flex justify-center items-center">
              <Image source={RizzFont} className="w-52 h-7" />
            </View>
            <Plus width={35} height={35} />
          </View>
          <View className="bg-white rounded-2xl mt-12">
            <Text className="text-black text-4xl text-center py-64">
              User's screenshot
            </Text>
          </View>
          <Text className="text-white text-2xl mt-8">Tap to copy rizz</Text>
          <View className="bg-white rounded-2xl mt-10 flex-row items-center">
            <Text className="text-black text-2xl py-8 px-4 w-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quis est ut dui faucibus dapibus nec vel erat.
            </Text>
            <View className="flex items-center">
              <Copy height={40} width={40} />
              <Text>copy</Text>
            </View>
          </View>
          <Link
            href="/screenshot"
            className="bg-[#00a676] rounded-2xl py-4 text-white text-2xl font-bold px-5 my-10 shadow-lg shadow-[#00a676]"
          >
            <Text>Generate more</Text>
          </Link>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Upload;
