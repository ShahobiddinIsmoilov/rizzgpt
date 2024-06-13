// Splash Screen
import { View } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import RizzText from "@/components/RizzText";

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/match");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <RizzText color="#ed227c" />
    </View>
  );
}
