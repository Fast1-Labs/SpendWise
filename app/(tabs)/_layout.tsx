import { useAuth } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';

export default function TabLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#2D2D2D',
          height: 60,
          marginVertical: 30,
          marginHorizontal: 20,
          position: 'absolute',
          borderRadius: 30,
          paddingBottom: 10,
          shadowColor: 'gainsboro',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
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
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome name="home" size={25} color={focused ? '#E2E8F0' : '#A0AEC0'} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome name="camera" size={25} color={focused ? '#E2E8F0' : '#A0AEC0'} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome name="history" size={25} color={focused ? '#E2E8F0' : '#A0AEC0'} />
          ),
        }}
      />
    </Tabs>
  );
}
