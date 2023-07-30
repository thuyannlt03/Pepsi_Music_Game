import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RecordingProps = {
    
};


type RemixProps = {
    
};
type SearchProps = {
    
};
type AnimationOneProps = {
    
};
type AnimationTwoProps = {
    
};
type AnimationThreeProps = {
   
};
type ThankYouProps = {
   
};
type ProfileNaProps = {
    
};
type RecordedProps = {
    
};



export type ChartStackParamList = {
    Recording: RecordingProps | undefined;
    Remix: RemixProps | undefined;
    Search: SearchProps | undefined;
    AnimationOne: AnimationOneProps | undefined;
    AnimationTwo: AnimationTwoProps | undefined;
    AnimationThree: AnimationThreeProps | undefined;
    ThankYou: ThankYouProps | undefined;
    ProfileNa: ProfileNaProps | undefined;
    Recorded: RecordedProps | undefined;
};

export type ChartStackNavigation = StackNavigationProp<ChartStackParamList>;

export type S = keyof ChartStackParamList;

export type ChartStackScreenProps<RouterName extends S> = StackScreenProps<
    ChartStackParamList,
    RouterName
>;