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



export type RemixStackParamList = {
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

export type RemixStackNavigation = StackNavigationProp<RemixStackParamList>;

export type S = keyof RemixStackParamList;

export type RemixStackScreenProps<RouterName extends S> = StackScreenProps<
    RemixStackParamList,
    RouterName
>;