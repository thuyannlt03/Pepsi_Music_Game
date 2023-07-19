import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type VideoListProps = {

};
type BeatListProps = {

};


type RecordProps = {

};

type ChartProps = {

};

type ProfileProps = {

};
type HomeProps = {
    id: number;
};
type NotificationProps = {
    id: number;
};

export type MainTabParamList = {
    VideoList: VideoListProps | undefined,
    BeatList: BeatListProps | undefined,
    Record: RecordProps | undefined,
    Chart: ChartProps | undefined,
    Profile: ProfileProps | undefined,
    Home: HomeProps | undefined,
    Notification: NotificationProps | undefined,
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabParamList>;

export type S = keyof MainTabParamList;

export type MainTabScreenProps<RouterName extends S> = BottomTabScreenProps<
    MainTabParamList,
    RouterName
>;