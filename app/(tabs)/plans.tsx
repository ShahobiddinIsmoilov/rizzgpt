// Unlock Free Trial Page
import { Text, View, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Elevate from "../../assets/fonts/elevate.png";
import GoBack from "../../assets/rizzgpt/goback.svg";
import Match from "../../assets/rizzgpt/match.svg";
import React from "react";

const Plans = () => {
  return (
    <ScrollView>
      <View className="mx-6 mt-20">
        <GoBack width={30} height={30} />
        <View className="mx-4 mt-8 flex items-center -translate-y-28">
          <Match width="350" height="350" />
        </View>
      </View>
      <View className="-translate-y-48">
        <View className="ml-28 mb-12">
          <Text className="text-white text-2xl leading-[45px]">{benefits}</Text>
        </View>
        <View className="flex-2 items-center rounded-3xl bg-[#363636] border-4 border-[#00a676] mx-8">
          <LinearGradient
            colors={["#00a676", "#43b1c6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="px-4 py-1 rounded-full -translate-y-[20px]"
          >
            <Text className="text-white font-bold text-lg">Rizz God</Text>
          </LinearGradient>
          <View className="m-6 -mt-1">
            <Image source={Elevate} className="w-72 h-9 mb-4" />
            <Link
              href="/upload"
              className="bg-[#00a676] rounded-full py-4 mb-4 text-white text-2xl font-bold text-center"
            >
              <Text>Unlock Free Trial</Text>
            </Link>
            <Text className="text-white/50 text-center text-lg mb-1">
              risk-free trial then $8.67/week
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Plans;

const benefits = `Unlimited Rizz\nCoach Recommended\nProven to Get Dates\nx10 More Responses\nx8 More Dates`;
