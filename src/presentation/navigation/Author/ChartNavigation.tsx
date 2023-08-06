import { createStackNavigator } from "@react-navigation/stack";
import { ChartStackParamList } from "../stack/ChartNavigation";
import Chart from "../../container/Author/Home/Chart";
import Top from "../../container/Author/Profile/Top";
import ProfileN from "../../container/Author/Profile/PrpfileN";
import VideoList from "../../container/Author/Profile/VideoList";
import NotificationChart from "../../container/Author/Home/NotificationChart";
import GiftChart from "../../container/Author/Home/GiftChart";




const Stack = createStackNavigator<ChartStackParamList>();

export const RankingNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Top' component={Top} />
            <Stack.Screen name='Chart' component={Chart} />
            <Stack.Screen name='ProfileN' component={ProfileN} />
            <Stack.Screen name='Video' component={VideoList} />
            <Stack.Screen name='Notification' component={NotificationChart} />
            <Stack.Screen name='Gift' component={GiftChart} />

        </Stack.Navigator>
    )
}