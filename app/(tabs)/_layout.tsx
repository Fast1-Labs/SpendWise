import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 60,
          marginVertical: 30,
          marginHorizontal: 20,
          position: 'absolute',
          borderRadius: 30,
          paddingBottom: 10,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          marginTop: 5,
          marginBottom: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }: any) => (
            <FontAwesome name="home" size={30} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarIcon: ({ color, focused }: any) => (
            <FontAwesome name="camera" size={30} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color, focused }: any) => (
            <FontAwesome name="history" size={30} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
    </Tabs>
  );
}
