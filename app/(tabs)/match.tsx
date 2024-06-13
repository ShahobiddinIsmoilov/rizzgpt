// Unlock Free Trial Screen
import { Text, View, ScrollView } from "react-native";
import GoBack from "../../assets/rizzgpt/goback.svg";
import Match from "../../assets/rizzgpt/match.svg";
import React from "react";
import TrialBox from "@/components/TrialBox";

export default function MatchScreen() {
  return (
    <ScrollView className="mx-8">
      <View className="mt-16">
        <GoBack width={28} height={28} color="#ed217c" />
        <View className="-mt-20">
          <Match width="100%" height="350" />
        </View>
      </View>
      <View className="-mt-12 mb-12 ml-20">
        <Text
          style={{ fontFamily: "RobotoLight" }}
          className="text-white text-2xl leading-[45px]"
        >
          {benefits}
        </Text>
      </View>
      <TrialBox />
    </ScrollView>
  );
}

const benefits = `Unlimited Rizz\nCoach Recommended\nProven to Get Dates\nx10 More Responses\nx8 More Dates`;
