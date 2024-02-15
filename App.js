import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewsListScreen from './src/NewListsScrenn';
import NewsDetailScreen from './src/NewsDetailScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewsList" component={NewsListScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
