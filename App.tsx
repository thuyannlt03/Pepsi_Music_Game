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
import SignInScreen from './src/presentation/container/Authen/SplashScreen/SignInScreen';
import SplashScreen from './src/presentation/container/Authen/SplashScreen/SplashScreen';
import SignUp from './src/presentation/container/Authen/SignUp/SignUp';
import SignUpOTP from './src/presentation/container/Authen/SignUp/SignUpOTP';
import SignUpScreen from './src/presentation/container/Authen/SplashScreen/SignUpScreen';
import Rules from './src/presentation/container/Authen/Intro/Rules';
import OnBoarding from './src/presentation/container/Authen/Intro/OnBoarding';
import Beat from './src/presentation/container/Author/Home/Beat';

import Thanks from './src/presentation/container/Author/Remix/ThankYou'
import Record from './src/presentation/container/Author/Home/Record';
import Notification from './src/presentation/container/Author/Notification/Notification';
import Gift from './src/presentation/container/Author/Notification/Gift';
import BeatList from './src/presentation/container/Author/BeatList/BeatList';
import New from './src/presentation/container/Author/BeatList/New';
import Recommen from './src/presentation/container/Author/BeatList/Recommen'
import Recorded from './src/presentation/container/Author/BeatList/Recorded';
import Use from './src/presentation/container/Author/BeatList/Use';
import Recording from './src/presentation/container/Author/Remix/Recording';
import NewBeat from './src/presentation/container/Author/Remix/NewBeat';
import Remix from './src/presentation/container/Author/Remix/Remix';
import AnimationOne from './src/presentation/container/Author/Remix/AnimationOne';
import AnimationTwo from './src/presentation/container/Author/Remix/AnimationTwo';
import AnimationThree from './src/presentation/container/Author/Remix/AnimationThree';
import Search from './src/presentation/container/Author/Remix/Search';



import { AuthorNavigation } from './src/presentation/navigation/stack/AuthorNavigation';
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

   // <Intro></Intro>
     //<Beat></Beat>
    //<SplashScreen></SplashScreen>
    //<Splash></Splash>
    //<Rules></Rules>
    //<Thanks></Thanks>
    
    //<Notification></Notification>
    //<BeatList></BeatList>
    //<Gift></Gift>
    // <NavigationContainer>
    //   <AuthorNavigation/>
    // </NavigationContainer>
   //<New></New>
   //<Recording></Recording>
   //<NewBeat></NewBeat>
   //<BeatList></BeatList>
   //<AnimationOne></AnimationOne>
   //<AnimationTwo></AnimationTwo>
   //<AnimationThree></AnimationThree>
   <Search></Search>

    // <NavigationContainer> 
      
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>

    //     <Stack.Screen name='SplashScreen' component={SplashScreen} />
    //     <Stack.Screen name='SignInScreen' component={SignInScreen} />
    //     <Stack.Screen name='SignIn' component={SignIn} />
    //     <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    //     <Stack.Screen name='SignUp' component={SignUp} />
    //     <Stack.Screen name='SignUpOTP' component={SignUpOTP} />
    //     <Stack.Screen name='SignInOTP' component={SignInOTP} />
    //     <Stack.Screen name='OnBoarding' component={OnBoarding} />
    //     <Stack.Screen name='Rules' component={Rules}/>
    //     <Stack.Screen name='Beat' component={Beat}/>
    //     <Stack.Screen name='Record' component={Record}/>
      
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
// npx react-native run-android

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
