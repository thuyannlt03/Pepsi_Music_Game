import { createStackNavigator } from "@react-navigation/stack";
import { BeatListStackParamList } from "../stack/BeatNavigation";
import { MainTabScreenProps } from "../tab/TabNavigation";

import BeatList from '../../container/Author/Home/BeatList';
import New from '../../container/Author/BeatList/New';
import Recommen from '../../container/Author/BeatList/Recommen'
import Recorded from '../../container/Author/BeatList/Recorded';
import Use from '../../container/Author/BeatList/Use';
import Notification from '../../container/Author/Notification/Notification';
import Gift from '../../container/Author/Notification/Gift';

const Stack = createStackNavigator<BeatListStackParamList>();

export const BeatNavigation: React.FC<MainTabScreenProps<'BeatList'>> = ({navigation,route}) => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BeatList" component={BeatList}/>
            <Stack.Screen name="New" component={New} />
            <Stack.Screen name="Recorded" component={Recorded} />
            <Stack.Screen name="Use" component={Use} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Recommen" component={Recommen} />
            <Stack.Screen name="Gift" component={Gift} />
        </Stack.Navigator>
    )
}