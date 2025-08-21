import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Hide the header for the Tabs navigator */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
