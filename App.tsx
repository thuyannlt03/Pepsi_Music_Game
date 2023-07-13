/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// npx react-native run-android

import React from 'react';
import SignIn from './src/presentation/container/Authen/SignIn/SignIn';
import SignInOTP from './src/presentation/container/Authen/SignIn/SignInOTP';
import OnBoarding from './src/presentation/container/Authen/SplashScreen/OnBoarding';
import SplashScreen from './src/presentation/container/Authen/SplashScreen/SplashScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/stack/Navigation'


const Stack = createStackNavigator<MainStackParamList>();


import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    //<SplashScreen></SplashScreen>
    //<Splash></Splash>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OnBoarding' component={OnBoarding} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignInOTP' component={SignInOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
