import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="match" options={{ headerShown: false }} />
      <Stack.Screen name="upload" options={{ headerShown: false }} />
      <Stack.Screen name="screenshot" options={{ headerShown: false }} />
      <Stack.Screen name="screenshotList" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
