import { createStackNavigator } from "@react-navigation/stack";
import { RemixStackParamList } from "../stack/RemixNavigation";

import Recording from "../../container/Author/Remix/Recording";
import Remix from "../../container/Author/Remix/Remix";
import AnimationOne from "../../container/Author/Remix/AnimationOne";
import AnimationTwo from "../../container/Author/Remix/AnimationTwo";
import AnimationThree from "../../container/Author/Remix/AnimationThree";
import Search from "../../container/Author/Remix/Search";
import ThankYou from "../../container/Author/Remix/ThankYou";


const Stack = createStackNavigator<RemixStackParamList>();

export const RemixNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           
            <Stack.Screen name='Recording' component={Recording}/>
            <Stack.Screen name='Remix' component={Remix} />
            <Stack.Screen name='AnimationOne' component={AnimationOne} />
            <Stack.Screen name='AnimationTwo' component={AnimationTwo} />
            <Stack.Screen name='AnimationThree' component={AnimationThree} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='ThankYou' component={ThankYou} />
        </Stack.Navigator>
    )
}