// Screenshots List Page
import { FlatList, ScrollView, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import RizzFont from "../../assets/fonts/rizzfont.png";
import Plus from "../../assets/rizzgpt/plus.svg";
import React from "react";

const Upload = () => {
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
            <View className="flex justify-center items-center">
              <Image source={RizzFont} className="w-52 h-7" />
            </View>
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
      <View className="shadow-xl shadow-black">
        <Link
          href="/screenshot"
          className="bg-[#00a676] rounded-full py-4 text-white text-center text-2xl font-bold px-5 my-10 mx-8 shadow-lg shadow-[#00a676]"
        >
          <Text>Upload Screenshot</Text>
        </Link>
      </View>
    </>
  );
};

export default Upload;

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
