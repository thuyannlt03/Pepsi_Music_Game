import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackParamList} from "../stack/Navigation";
import { MainTabNavigation, MainTabParamList } from "./TabNavigation";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { BACKGROUND_TAB, CENTER_BUTTON, VIDEO_SQUARE, VIDEO_SQUARE_FOCUS, CHART, CHART_FOCUS, PROFILE, PROFILE_FOCUS, MUSIC, MUSIC_FOCUS, ICON_HOME } from "../../../../assets";

import { Colors } from "../../resource/value/Colors";

import Record from "../../container/Author/Home/Record";
import VideoList from "../../container/Author/Home/VideoList";
import Chart from "../../container/Author/Home/Chart";
import Profile from "../../container/Author/Home/Profile";
import BeatList from "../../container/Author/Home/BeatList";
import Recording from "../../container/Author/Remix/Recording";



const Tab = createBottomTabNavigator();

export const AuthorNavigation = () => {

    return (
        <Tab.Navigator initialRouteName="Record" 
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: Dimensions.get('screen').height * 0.1,
                    justifyContent: "center",
                    // backgroundColor: 'black',
                },
                tabBarItemStyle: {
                    marginBottom: Dimensions.get('screen').height * 0.03,
                },
                headerShown: false,
                tabBarActiveTintColor: Colors.WHITE,
                tabBarInactiveTintColor: Colors.BOTTOM_BAR,
            })}>
            <Tab.Screen name="VideoList" component={VideoList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? VIDEO_SQUARE_FOCUS : VIDEO_SQUARE} style={styles.image}/>
                        </View>
                    ),
                    title: 'Video List',
                }} />
            <Tab.Screen  name="BeatList" component={BeatList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused? MUSIC_FOCUS : MUSIC} style={styles.image}/>
                        </View>
                    ),
                    title: 'Beat List',
                }} />
            <Tab.Screen name="Record" component={Record}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                top: - Dimensions.get('screen').height * 0.03,
                                borderRadius: 45,
                                width: Dimensions.get('screen').width / 5,
                            }}>
                            <Image source={CENTER_BUTTON} style={styles.imageRecord} />
                        </View>
                    ),
                    title: 'Thu âm',
                }} />
            <Tab.Screen name="Chart" component={Chart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? CHART_FOCUS : CHART} style={styles.image}/>
                        </View>
                    ),
                    title: 'Xếp hạng',
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? PROFILE_FOCUS : PROFILE} style={styles.image}/>
                        </View>
                    ),
                    title: 'Cá nhân',
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    imageRecord: {
        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.12,
        marginStart: - Dimensions.get('window').width * 0.215,
        
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.08
    },
});
