import { createStackNavigator } from "@react-navigation/stack";
import { ProfileParamList } from "../stack/ProfileNavigation";
import Profile from "../../container/Author/Home/Profile";
import VideoList from "../../container/Author/Home/VideoListP";
import Home from "../../container/Author/Home/Home";

const Stack = createStackNavigator<ProfileParamList>();

export const ProfileNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='VideoList' component={VideoList}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}