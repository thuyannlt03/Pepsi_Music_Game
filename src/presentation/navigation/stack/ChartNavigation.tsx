import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type ChartProps = {
};

type TopProps = {
};

type ProfileNProps = {
};

type VideoProps = {
};

type NotificationProps = {
};

type GiftProps = {
};

export type ChartStackParamList = {
    Chart: ChartProps | undefined;
    Top: TopProps | undefined;
    ProfileN: ProfileNProps | undefined;
    Video: VideoProps | undefined;
    Notification: NotificationProps | undefined;
    Gift: GiftProps | undefined;
};

export type ChartStackNavigation = StackNavigationProp<ChartStackParamList>;

export type S = keyof ChartStackParamList;

export type ChartStackScreenProps<RouterName extends S> = StackScreenProps<
    ChartStackParamList,
    RouterName
>;