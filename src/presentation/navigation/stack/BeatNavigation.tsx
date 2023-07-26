import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";


type BeatListProps = {
    id: number;
};
type UseProps = {
    id: number;
};
type RecordedProps = {
    id: number;
};
type RecommenProps = {
    id: number;
};
type NewProps = {
    id: number;
};


type NotificationProps = {
    id: number;
};
type GiftProps = {
    id: number;
};

type RecordingProps = {
    
};

type ChartProps = {
    
};

type RecordProps = {
    
};


export type BeatListStackParamList = {
  
    BeatList: BeatListProps | undefined,
    Use: UseProps | undefined;
    Recorded: RecordedProps | undefined;
    Recommen: RecommenProps | undefined;
    New: NewProps | undefined;
    Notification: NotificationProps | undefined,
    Gift: GiftProps | undefined;
    Recording: RecordingProps | undefined;
    Record: RecordingProps | undefined;
    Chart: ChartProps | undefined;


};

export type BeatListStackNavigation = StackNavigationProp<BeatListStackParamList>;

export type S = keyof BeatListStackParamList;

export type BeatListStackScreenProps<RouterName extends S> = StackScreenProps<
    BeatListStackParamList,
    RouterName
>;