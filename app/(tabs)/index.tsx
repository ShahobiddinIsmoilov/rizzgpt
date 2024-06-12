// Splash Screen
import { Image, View } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import RizzFontPink from "../../assets/fonts/rizzfont_pink.png";

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/plans");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Image source={RizzFontPink} className="w-56 h-8" />
    </View>
  );
}
