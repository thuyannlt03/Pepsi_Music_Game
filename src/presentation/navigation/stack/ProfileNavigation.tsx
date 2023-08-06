import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type ProfileProps = {
};

type VideoListProps = {
};

export type ProfileParamList = {
    Profile: ProfileProps | undefined;
    VideoList: VideoListProps | undefined;
};

export type ProfileNavigation = StackNavigationProp<ProfileParamList>;

export type S = keyof ProfileParamList;

export type ProfileScreenProps<RouterName extends S> = StackScreenProps<
    ProfileParamList,
    RouterName
>;