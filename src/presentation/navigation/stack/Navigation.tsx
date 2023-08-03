import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashScreenProps = {
    id: number;
};
type SignInScreenProps = {
    userID: number;
};

type SignInProps = {
    
    name: string;
};

type SignInOTPProps = {
  
    phone: string;
    name?: string;
    type:  boolean;
};
type SignUpScreenProps = {
    id: number;
};

type SignUpProps = {
    id: number;
};

type SignUpOTPProps = {
    name?: string;
    phone: string;
    type:  boolean;
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
type RecordProps = {
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
    Record: RecordProps | undefined;
    
    
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;