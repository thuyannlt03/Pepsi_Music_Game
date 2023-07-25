import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../../navigation/stack/Navigation";
import SignIn from "../../container/Authen/SignIn/SignIn";
import SignInOTP from "../../container/Authen/SignIn/SignInOTP";
import SignInScreen from '../../container/Authen/SplashScreen/SignInScreen';
import SplashScreen from '../../container/Authen/SplashScreen/SplashScreen';
import SignUp from '../../container/Authen/SignUp/SignUp';
import SignUpOTP from '../../container/Authen/SignUp/SignUpOTP';
import SignUpScreen from '../../container/Authen/SplashScreen/SignUpScreen';
import Rules from '../../container/Authen/Intro/Rules';
import OnBoarding from '../../container/Authen/Intro/OnBoarding';
import Beat from '../../container/Author/BeatList/Beat';
import { AuthorNavigation } from "../../navigation/tab/AuthorNavigation";

import BeatList from '../../container/Author/Home/BeatList';
import New from '../../container/Author/BeatList/New';
import Recommen from '../../container/Author/BeatList/Recommen'
import Recorded from '../../container/Author/BeatList/Recorded';
import Use from '../../container/Author/BeatList/Use';
import Notification from '../../container/Author/Notification/Notification';
import Gift from '../../container/Author/Notification/Gift';

import { RemixStackParamList } from "../../navigation/stack/RemixNavigation";
import { BeatListStackParamList} from "../../navigation/stack/BeatNavigation"
import Recording from '../../container/Author/Remix/Recording';

import Remix from '../../container/Author/Remix/Remix';
import AnimationOne from '../../container/Author/Remix/AnimationOne';
import AnimationTwo from '../../container/Author/Remix/AnimationTwo';
import AnimationThree from '../../container/Author/Remix/AnimationThree';
import Search from '../../container/Author/Remix/Search';
import ThankYou from '../../container/Author/Remix/ThankYou'
import ProfileNa from "../../container/Author/Profile/PrpfileNa";




const Stack = createStackNavigator<BeatListStackParamList>();

export const AuthenNavigation = () => {
    return (
      

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
     


    
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='BeatList' component={BeatList} />
                <Stack.Screen name='Notification' component={Notification} />
                <Stack.Screen name='Gift' component={Gift} />
                <Stack.Screen name='New' component={New} />
                <Stack.Screen name='Use' component={Use} />
                <Stack.Screen name='Recorded' component={Recorded} />
                <Stack.Screen name='Recommen' component={Recommen} />
                <Stack.Screen name='Recording' component={Recording} />
                {/* <Stack.Screen name='Remix' component={Remix} />
                <Stack.Screen name='AnimationOne' component={AnimationOne} />
                <Stack.Screen name='AnimationTwo' component={AnimationTwo} />
                <Stack.Screen name='AnimationThree' component={AnimationThree} />
                <Stack.Screen name='Search' component={Search} />
                <Stack.Screen name='ThankYou' component={ThankYou} />
                <Stack.Screen name='Recorded' component={Recorded} />
                <Stack.Screen name='ProfileNa' component={ProfileNa} /> */}
            </Stack.Navigator>
   


    )
}
