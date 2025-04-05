import { SafeAreaView, View, StatusBar } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1">
        <View className="h-[100px] w-full rounded-lg bg-card" />
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
