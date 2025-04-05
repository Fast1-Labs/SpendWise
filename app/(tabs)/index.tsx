import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView, View, StatusBar, Text, Platform } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView
        className="flex-1"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View className="flex-row items-center justify-between p-6">
          <Text className="text-xl font-bold text-textPrimary">Welcome user!</Text>
          <FontAwesome name="power-off" color="red" size={20} onPress={() => {}} />
        </View>
        <View className="h-[100px] w-full rounded-lg bg-card" />
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
