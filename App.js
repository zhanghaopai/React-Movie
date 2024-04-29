import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View >
      <View className="bg-red-400">
        <Text className="text-white">Hello World</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
