import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom,
            borderTopWidth: 0,
          },
          headerStyle: { backgroundColor: '#111' },
          headerTintColor: '#fff',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="home" size={28} color={focused ? '#9500ffff' : 'gray'} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#9500ffff' : 'gray', fontSize: 12 }}>Home</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="ShopScreen"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="shopping-cart" size={28} color={focused ? '#7CFC00' : 'gray'} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#7CFC00' : 'gray', fontSize: 12 }}>Shop</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="MessageScreen"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="envelope" size={28} color={focused ? '#FF00FF' : 'gray'} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#FF00FF' : 'gray', fontSize: 12 }}>Messages</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="user" size={28} color={focused ? '#1E90FF' : 'gray'} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#1E90FF' : 'gray', fontSize: 12 }}>Profile</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="SettingsScreen"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="cog" size={28} color={focused ? '#FFD700' : 'gray'} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#FFD700' : 'gray', fontSize: 12 }}>Settings</Text>
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
