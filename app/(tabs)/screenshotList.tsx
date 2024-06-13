// Screenshots List Screen
import { FlatList, ScrollView, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import Plus from "../../assets/rizzgpt/plus.svg";
import React from "react";
import RizzText from "@/components/RizzText";

export default function ScreenshotListScreen() {
  const data = Array.from({ length: 15 }, (_, index) => ({
    id: index.toString(),
  }));

  const renderItem = ({ item }: any) => (
    <View className={`${item.id % 3 === 2 || "mr-6"}`}>
      <Screenshot />
    </View>
  );

  const Divider = () => <View className="h-6" />;

  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={["#e62079", "#000000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.3 }}
        >
          <View className="mt-24 mx-8">
            <RizzText color="#ffffff" />
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              numColumns={3}
              ItemSeparatorComponent={Divider}
              scrollEnabled={false}
              className="mt-8"
            />
          </View>
        </LinearGradient>
      </ScrollView>
      <View>
        <Link
          href="/screenshot"
          className="bg-button rounded-full py-4 text-white text-center text-2xl font-bold px-5 my-8 mx-8"
        >
          <Text>Upload Screenshot</Text>
        </Link>
      </View>
    </>
  );
}

const Screenshot = () => {
  return (
    <View className="flex items-end w-[99px] border border-white/75 shadow-xl shadow-white rounded-xl bg-black">
      <Text className="text-lg text-white text-center w-full mt-12 mb-4">
        User's screenshot
      </Text>
      <View className="rotate-45 m-2">
        <Plus width={35} height={35} />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   dropShadow: {
//     shadowColor: "#00a676",
//     shadowOpacity: 1,
//     shadowRadius: 5,
//     elevation: 10,
//   },

//   button: {
//     position: "relative",
//     backgroundColor: "#00a676",
//     display: "flex",
//     alignItems: "center",
//     color: "white",
//     justifyContent: "center",
//     padding: 12,
//     gap: 12,
//     borderRadius: 8,
//   },

//   fuck: {
//     zIndex: -1,
//     position: "absolute",
//     backgroundColor: "green",
//   },
// });
