import { createStackNavigator } from "@react-navigation/stack";
import { VideoListStackParamList } from "../stack/VideoListNavigation";
import VideoList from "../../container/Author/Home/VideoList";
import NotificationVideo from "../../container/Author/Home/NotificationVideo";
import GiftVideo from "../../container/Author/Home/GifVideot";


const Stack = createStackNavigator<VideoListStackParamList>();

export const VideoListNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VideoList" component={VideoList}/>
            <Stack.Screen name='Notification' component={NotificationVideo}/>
            <Stack.Screen name='Gift' component={GiftVideo} />
        </Stack.Navigator>
    )
}