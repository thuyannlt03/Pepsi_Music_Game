import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type VideoListProps = {
};

type NotificationProps = {
};

type GiftProps = {
};
export type VideoListStackParamList = {
    VideoList: VideoListProps | undefined;
    Notification: NotificationProps | undefined;
    Gift: GiftProps | undefined;
};

export type VideoListStackNavigation = StackNavigationProp<VideoListStackParamList>;

export type S = keyof VideoListStackParamList;

export type VideoListStackScreenProps<RouterName extends S> = StackScreenProps<
    VideoListStackParamList,
    RouterName
>;