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
import Beat from './src/presentation/container/Author/BeatList/Beat';

import Thanks from './src/presentation/container/Author/Remix/ThankYou'
import Record from './src/presentation/container/Author/Home/Record';
import Notification from './src/presentation/container/Author/Notification/Notification';
import Gift from './src/presentation/container/Author/Notification/Gift';
import BeatList from './src/presentation/container/Author/Home/BeatList';
import New from './src/presentation/container/Author/BeatList/New';
import Recommen from './src/presentation/container/Author/BeatList/Recommen'
import Recorded from './src/presentation/container/Author/BeatList/Recorded';
import Use from './src/presentation/container/Author/BeatList/Use';
import Recording from './src/presentation/container/Author/Remix/Recording';

import Remix from './src/presentation/container/Author/Remix/Remix';
import AnimationOne from './src/presentation/container/Author/Remix/AnimationOne';
import AnimationTwo from './src/presentation/container/Author/Remix/AnimationTwo';
import AnimationThree from './src/presentation/container/Author/Remix/AnimationThree';
import Search from './src/presentation/container/Author/Remix/Search';
import ProfileA from './src/presentation/container/Author/LeaderBoard/ProfileA';

import Profile from './src/presentation/container/Author/Home/Profile';
import DialogReport from './src/presentation/component/dialog/DialogReport';
import DialogNotification from './src/presentation/component/dialog/DialogNotification';
import DialogProgress from './src/presentation/component/dialog/DialogProgress';
import ThankYou from './src/presentation/container/Author/Remix/ThankYou';
import VideoList from './src/presentation/container/Author/Home/VideoList';

import { AuthorNavigation } from './src/presentation/navigation/Author/AuthorNavigation';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/stack/Navigation'
import { AuthenNavigation } from './src/presentation/navigation/Authen/AuthenNavigation';
import { AppNavigation } from './src/presentation/navigation/AppNavigation';
import Top from './src/presentation/container/Author/Profile/Top';
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

import firestore from '@react-native-firebase/firestore';
import database, { firebase } from '@react-native-firebase/database';
import { rtdb } from './src/core/api/url/RealTime'
import { User } from './src/core/model/User'
import { UserRespone } from './src/core/model/UserRespone'

const user = {
  name: 'nguyen',
  phone: '09090909',
  image: 'unknow',
  video: 0,
  react: 0,
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

   // <Intro></Intro>
    
    //<SplashScreen></SplashScreen>
    //<Splash></Splash>
    //<Rules></Rules>
    
    
   
    // <NavigationContainer>
    //   <AuthorNavigation/>
    // </NavigationContainer>
     //<Beat></Beat>
   // <BeatList></BeatList>
   //<New></New>
   //<Use></Use>
  //<Recorded></Recorded>
   //<Recommen></Recommen>
    //<Recording></Recording>
   // <Recording2></Recording2>
   //<NewBeat></NewBeat>
   // <Remix></Remix>
   //<AnimationOne></AnimationOne>
   
   //<AnimationThree></AnimationThree>
   //<Search></Search>
   //<Thanks></Thanks>
    //<Notification></Notification>
     //<Gift></Gift>

    //<ProfileA></ProfileA>
    //<ProfileN></ProfileN>
   //<Profile></Profile>
   
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

    //   <NavigationContainer> 
      
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>

    //     <Stack.Screen name='BeatList' component={BeatList} />
    //     <Stack.Screen name='Notification' component={Notification} />
    //     <Stack.Screen name='Gift' component={Gift} />
    //     <Stack.Screen name='New' component={New} />
    //     <Stack.Screen name='Use' component={Use} />
    //     <Stack.Screen name='Recorded' component={Recorded} />
    //     <Stack.Screen name='Recommen' component={Recommen} />
        
    //     <Stack.Screen name='Recording' component={Recording}/>
    //     <Stack.Screen name='Recording2' component={Recording2}/>
    //     <Stack.Screen name='NewBeat' component={NewBeat}/>
    //     <Stack.Screen name='NewBeat2' component={NewBeat2}/>
    //     <Stack.Screen name='AnimationOne' component={AnimationOne}/>
    //     <Stack.Screen name='AnimationTwo' component={AnimationTwo}/>
    //     <Stack.Screen name='AnimationThree' component={AnimationThree}/>
    //     <Stack.Screen name='Search' component={Search}/>
    //     <Stack.Screen name='ThankYou' component={ThankYou}/>
    //     <Stack.Screen name='Recorded' component={Recorded} />
      
    //   </Stack.Navigator>
    // </NavigationContainer>
 //<Top></Top>
 //<AnimationTwo></AnimationTwo>
  //<VideoList></VideoList>
    
    <AppNavigation></AppNavigation>
    //<DialogNotification></DialogNotification>
    //<DialogReport/>
   //<VideoList/>
   //<DialogProgress></DialogProgress>
    
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
