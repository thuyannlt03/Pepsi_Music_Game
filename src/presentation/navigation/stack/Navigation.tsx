import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashScreenProps = {
    id: number;
};
type SigInScreenProps = {
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


export type MainStackParamList = {
    SplashScreen: SplashScreenProps | undefined;
    SigInScreen: SigInScreenProps | undefined;
    SignIn: SignInProps | undefined;
    SignInOTP: SignInOTPProps | undefined;
    SignUp: SignUpProps | undefined;
    SignUpOTP: SignUpOTPProps | undefined;
    SignUpScreen: SignUpScreenProps | undefined;
    OnBoarding: OnBoardingProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;