import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashScreenProps = {
    id: number;
};
type SignInScreenProps = {
    userID: number;
};

type SignInProps = {
    id: number;
};

type SignInOTPProps = {
    id: number;
};
type SignUpScreenProps = {
    id: number;
};

type SignUpProps = {
    id: number;
};

type SignUpOTPProps = {
    id: number;
};
type OnBoardingProps = {
    id: number;
};
type RulesProps = {
    id: number;
};
type BeatProps = {
    id: number;
};

type NotificationProps = {
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
type RecordingProps = {
    id: number;
};
type Recording2Props = {
    id: number;
};
type NewBeatProps = {
    id: number;
};
type NewBeat2Props = {
    id: number;
};
type RemixProps = {
    id: number;
};
type SearchProps = {
    id: number;
};
type AnimationOneProps = {
    id: number;
};
type AnimationTwoProps = {
    id: number;
};
type AnimationThreeProps = {
    id: number;
};
type ThankYouProps = {
    id: number;
};
type BeatListProps = {
    id: number;
};
type GiftProps = {
    id: number;
};






export type MainStackParamList = {
    SplashScreen: SplashScreenProps | undefined;
    SignInScreen: SignInScreenProps | undefined;
    SignIn: SignInProps | undefined;
    SignInOTP: SignInOTPProps | undefined;
    SignUp: SignUpProps | undefined;
    SignUpOTP: SignUpOTPProps | undefined;
    SignUpScreen: SignUpScreenProps | undefined;
    OnBoarding: OnBoardingProps | undefined;
    Rules: RulesProps | undefined;
    Beat: BeatProps | undefined;
    Notification: NotificationProps | undefined,
    Use: UseProps | undefined;
    Recorded: RecordedProps | undefined;
    Recommen: RecommenProps | undefined;
    New: NewProps | undefined;
    Recording: RecordingProps | undefined;
    Recording2: Recording2Props | undefined;
    NewBeat: NewBeatProps | undefined;
    NewBeat2: NewBeat2Props | undefined;
    Remix: RemixProps | undefined;
    Search: SearchProps | undefined;
    AnimationOne: AnimationOneProps | undefined;
    AnimationTwo: AnimationTwoProps | undefined;
    AnimationThree: AnimationThreeProps | undefined;
    ThankYou: ThankYouProps | undefined;
    BeatList: BeatListProps | undefined,
    Gift: GiftProps | undefined;




   
    
    
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;